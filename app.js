// East West University - Lab Slot & Routine Finder
// App Logic & Interactivity

(function () {
  'use strict';

  // Application State
  const state = {
    selectedDay: 'Sunday',
    selectedSlot: 'all', // 'all', 'current', or slot id
    selectedFloor: 'all', // 'all', '2nd', '4th', '5th'
    statusFilter: 'free_only', // 'free_only', 'free_practice', 'all'
    searchQuery: '',
    activeTab: 'cards', // 'cards', 'matrix', 'rooms'
    theme: localStorage.getItem('ewu_lab_theme') || 'dark',
    currentTimeMin: 0,
    currentDayName: 'Sunday'
  };

  // DOM Elements
  const elements = {
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    liveClockEl: document.getElementById('liveClock'),
    liveDayEl: document.getElementById('liveDay'),
    freeRoomsCountEl: document.getElementById('freeRoomsCount'),
    totalRoomsCountEl: document.getElementById('totalRoomsCount'),
    daysPillsContainer: document.getElementById('daysPillsContainer'),
    slotsPillsContainer: document.getElementById('slotsPillsContainer'),
    floorFilter: document.getElementById('floorFilter'),
    statusFilter: document.getElementById('statusFilter'),
    searchInput: document.getElementById('searchInput'),
    cardsGrid: document.getElementById('cardsGrid'),
    matrixContainer: document.getElementById('matrixView'),
    matrixTableBody: document.getElementById('matrixTableBody'),
    matrixTableHead: document.getElementById('matrixTableHead'),
    resultsTitle: document.getElementById('resultsTitle'),
    resultsCount: document.getElementById('resultsCount'),
    tabBtns: document.querySelectorAll('.tab-btn'),
    routineModal: document.getElementById('routineModal'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalRoomTitle: document.getElementById('modalRoomTitle'),
    modalRoomSubtitle: document.getElementById('modalRoomSubtitle'),
    modalScheduleContent: document.getElementById('modalScheduleContent')
  };

  // Initialize
  function init() {
    initTheme();
    initLiveTime();
    initFilters();
    initTabs();
    initModal();
    render();

    // Update time every 15 seconds
    setInterval(updateLiveTime, 15000);
  }

  // Theme Management
  function initTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    updateThemeIcon();

    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.addEventListener('click', () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', state.theme);
        localStorage.setItem('ewu_lab_theme', state.theme);
        updateThemeIcon();
      });
    }
  }

  function updateThemeIcon() {
    if (!elements.themeToggleBtn) return;
    elements.themeToggleBtn.innerHTML = state.theme === 'dark'
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>`
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }

  // Live Time Handling
  function initLiveTime() {
    updateLiveTime();
    // Default selectedDay to today if valid, else Sunday
    if (DAYS_OF_WEEK.includes(state.currentDayName)) {
      state.selectedDay = state.currentDayName;
    }
  }

  function updateLiveTime() {
    const now = new Date();
    // Format for Dhaka/Local
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    state.currentDayName = days[now.getDay()];
    state.currentTimeMin = now.getHours() * 60 + now.getMinutes();

    if (elements.liveClockEl) {
      elements.liveClockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    if (elements.liveDayEl) {
      elements.liveDayEl.textContent = state.currentDayName;
    }

    updateFreeNowStats();
  }

  function updateFreeNowStats() {
    let freeCount = 0;
    LAB_ROOMS_DATA.forEach(room => {
      const status = getRoomLiveStatus(room, state.currentDayName, state.currentTimeMin);
      if (status.isFree || status.isPractice) {
        freeCount++;
      }
    });

    if (elements.freeRoomsCountEl) {
      elements.freeRoomsCountEl.textContent = freeCount;
    }
    if (elements.totalRoomsCountEl) {
      elements.totalRoomsCountEl.textContent = LAB_ROOMS_DATA.length;
    }
  }

  // Status computation for a specific point in time
  function getRoomLiveStatus(room, dayName, currentMinutes) {
    const daySchedule = room.schedule[dayName] || [];

    // Outside standard university hours (07:30 to 20:30)
    if (currentMinutes < 450 || currentMinutes > 1230) {
      return {
        status: 'closed',
        badge: 'Campus Closed',
        isFree: true,
        currentClass: null,
        nextClass: daySchedule.length > 0 ? daySchedule[0] : null,
        freeUntilMin: null
      };
    }

    // Find class currently in progress
    const activeBooking = daySchedule.find(item => {
      const s = timeToMinutes(item.start);
      const e = timeToMinutes(item.end);
      return currentMinutes >= s && currentMinutes < e;
    });

    if (activeBooking) {
      if (activeBooking.isPractice) {
        return {
          status: 'practice',
          badge: 'Practice Hour',
          isFree: true,
          isPractice: true,
          currentClass: activeBooking,
          endsAtMin: timeToMinutes(activeBooking.end)
        };
      }
      return {
        status: 'busy',
        badge: 'Class in Session',
        isFree: false,
        isPractice: false,
        currentClass: activeBooking,
        endsAtMin: timeToMinutes(activeBooking.end)
      };
    }

    // It is free! Find next upcoming class today
    const upcoming = daySchedule
      .filter(item => timeToMinutes(item.start) > currentMinutes)
      .sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start));

    const nextClass = upcoming.length > 0 ? upcoming[0] : null;
    const freeUntilMin = nextClass ? timeToMinutes(nextClass.start) : 1230; // 8:30 PM

    return {
      status: 'free',
      badge: 'Free Now',
      isFree: true,
      isPractice: false,
      currentClass: null,
      nextClass: nextClass,
      freeUntilMin: freeUntilMin
    };
  }

  // Compute all free intervals for a room on a given day
  function getFreeIntervalsForDay(room, dayName) {
    const daySchedule = (room.schedule[dayName] || [])
      .slice()
      .sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start));

    const dayStartMin = 480; // 08:00 AM
    const dayEndMin = 1200;  // 08:00 PM

    if (daySchedule.length === 0) {
      return [{
        startMin: dayStartMin,
        endMin: dayEndMin,
        startStr: '08:00 AM',
        endStr: '08:00 PM',
        durationMins: dayEndMin - dayStartMin,
        isAllDay: true
      }];
    }

    const freeIntervals = [];
    let currentMarker = dayStartMin;

    daySchedule.forEach(slot => {
      const slotStart = timeToMinutes(slot.start);
      const slotEnd = timeToMinutes(slot.end);

      // Only consider regular classes as blocking; practice hours still provide open time
      if (slotStart > currentMarker) {
        freeIntervals.push({
          startMin: currentMarker,
          endMin: slotStart,
          startStr: minutesToTime12(currentMarker),
          endStr: minutesToTime12(slotStart),
          durationMins: slotStart - currentMarker,
          isAllDay: false
        });
      }
      if (slotEnd > currentMarker) {
        currentMarker = slotEnd;
      }
    });

    if (currentMarker < dayEndMin) {
      freeIntervals.push({
        startMin: currentMarker,
        endMin: dayEndMin,
        startStr: minutesToTime12(currentMarker),
        endStr: minutesToTime12(dayEndMin),
        durationMins: dayEndMin - currentMarker,
        isAllDay: false
      });
    }

    return freeIntervals;
  }

  // Check if room is free during a specific time slot
  function checkRoomSlotStatus(room, dayName, slotObj) {
    const daySchedule = room.schedule[dayName] || [];
    const slotStart = slotObj.startMin;
    const slotEnd = slotObj.endMin;

    // Overlapping classes
    const overlapping = daySchedule.filter(item => {
      const s = timeToMinutes(item.start);
      const e = timeToMinutes(item.end);
      return Math.max(s, slotStart) < Math.min(e, slotEnd);
    });

    if (overlapping.length === 0) {
      return { status: 'free', label: 'Free (No Class)', classes: [] };
    }

    // Check if ONLY practice hours
    const allPractice = overlapping.every(item => item.isPractice);
    if (allPractice) {
      return { status: 'practice', label: 'Practice Hour', classes: overlapping };
    }

    return { status: 'busy', label: 'Busy (Class)', classes: overlapping };
  }

  // Setup Filters
  function initFilters() {
    // Render Day Pills
    if (elements.daysPillsContainer) {
      elements.daysPillsContainer.innerHTML = '';
      DAYS_OF_WEEK.forEach(day => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `pill-btn ${day === state.selectedDay ? 'active' : ''} ${day === state.currentDayName ? 'today-badge' : ''}`;
        btn.textContent = day;
        btn.addEventListener('click', () => {
          state.selectedDay = day;
          updateDayPills();
          render();
        });
        elements.daysPillsContainer.appendChild(btn);
      });
    }

    // Render Slot Pills
    renderSlotPills();

    // Floor filter dropdown
    if (elements.floorFilter) {
      elements.floorFilter.value = state.selectedFloor;
      elements.floorFilter.addEventListener('change', (e) => {
        state.selectedFloor = e.target.value;
        render();
      });
    }

    // Status filter dropdown
    if (elements.statusFilter) {
      elements.statusFilter.value = state.statusFilter;
      elements.statusFilter.addEventListener('change', (e) => {
        state.statusFilter = e.target.value;
        render();
      });
    }

    // Search Input
    if (elements.searchInput) {
      elements.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim().toLowerCase();
        render();
      });
    }
  }

  function updateDayPills() {
    const pills = elements.daysPillsContainer.querySelectorAll('.pill-btn');
    pills.forEach(p => {
      if (p.textContent.startsWith(state.selectedDay)) {
        p.classList.add('active');
      } else {
        p.classList.remove('active');
      }
    });
  }

  function renderSlotPills() {
    if (!elements.slotsPillsContainer) return;
    elements.slotsPillsContainer.innerHTML = '';

    const slotOptions = [
      { id: 'all', label: 'All Day Overview' },
      { id: 'current', label: '⚡ Free Right Now' },
      ...STANDARD_TIME_SLOTS
    ];

    slotOptions.forEach(s => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `pill-btn ${s.id === state.selectedSlot ? 'active' : ''}`;
      btn.textContent = s.label;
      btn.addEventListener('click', () => {
        state.selectedSlot = s.id;
        renderSlotPills();
        render();
      });
      elements.slotsPillsContainer.appendChild(btn);
    });
  }

  // Navigation Tabs
  function initTabs() {
    elements.tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        elements.tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeTab = btn.getAttribute('data-tab');

        if (state.activeTab === 'cards') {
          elements.cardsGrid.style.display = 'grid';
          elements.matrixContainer.style.display = 'none';
        } else if (state.activeTab === 'matrix') {
          elements.cardsGrid.style.display = 'none';
          elements.matrixContainer.style.display = 'block';
        }
        render();
      });
    });
  }

  // Modal View for Weekly Routine
  function initModal() {
    if (elements.modalCloseBtn) {
      elements.modalCloseBtn.addEventListener('click', closeModal);
    }
    if (elements.routineModal) {
      elements.routineModal.addEventListener('click', (e) => {
        if (e.target === elements.routineModal) closeModal();
      });
    }
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }

  function openRoomModal(room) {
    if (!elements.routineModal) return;
    elements.modalRoomTitle.textContent = `Room ${room.roomNumber} - ${room.name}`;
    elements.modalRoomSubtitle.textContent = `${room.floor} • ${room.building} • Capacity: ${room.capacity} students`;

    let html = `
      <table class="weekly-table">
        <thead>
          <tr>
            <th>Day</th>
            <th>Scheduled Classes & Practice Slots</th>
          </tr>
        </thead>
        <tbody>
    `;

    DAYS_OF_WEEK.forEach(day => {
      const schedule = room.schedule[day] || [];
      html += `
        <tr>
          <td class="weekly-day-title">${day}</td>
          <td>
      `;

      if (schedule.length === 0) {
        html += `<span class="class-mini-pill free">✨ Entire Day Free (No Scheduled Classes)</span>`;
      } else {
        html += `<div class="class-pill-list">`;
        schedule.forEach(item => {
          const clsType = item.isPractice ? 'practice' : 'occupied';
          const facText = item.faculty ? ` • ${item.faculty}` : '';
          const secText = item.section ? ` [Sec ${item.section}]` : '';
          html += `
            <div class="class-mini-pill ${clsType}">
              <strong>${item.start} - ${item.end}</strong><br>
              ${item.course}${secText}${facText}
            </div>
          `;
        });
        html += `</div>`;
      }

      html += `
          </td>
        </tr>
      `;
    });

    html += `</tbody></table>`;
    elements.modalScheduleContent.innerHTML = html;
    elements.routineModal.classList.add('open');
  }

  function closeModal() {
    if (elements.routineModal) {
      elements.routineModal.classList.remove('open');
    }
  }

  // Main Render Function
  function render() {
    updateFreeNowStats();
    if (state.activeTab === 'cards') {
      renderCards();
    } else if (state.activeTab === 'matrix') {
      renderMatrix();
    }
  }

  // Filter logic
  function filterRooms() {
    return LAB_ROOMS_DATA.filter(room => {
      // Floor filter
      if (state.selectedFloor !== 'all') {
        if (state.selectedFloor === '2nd' && !room.floor.includes('2nd')) return false;
        if (state.selectedFloor === '4th' && !room.floor.includes('4th')) return false;
        if (state.selectedFloor === '5th' && !room.floor.includes('5th')) return false;
      }

      // Search Query filter
      if (state.searchQuery) {
        const q = state.searchQuery;
        const matchesRoom = room.roomNumber.toLowerCase().includes(q) ||
                            room.name.toLowerCase().includes(q) ||
                            room.floor.toLowerCase().includes(q);

        const daySchedule = room.schedule[state.selectedDay] || [];
        const matchesClass = daySchedule.some(c =>
          c.course.toLowerCase().includes(q) ||
          (c.faculty && c.faculty.toLowerCase().includes(q))
        );

        if (!matchesRoom && !matchesClass) return false;
      }

      // Slot and Status Filter
      if (state.selectedSlot === 'current') {
        const liveStatus = getRoomLiveStatus(room, state.selectedDay, state.currentTimeMin);
        if (state.statusFilter === 'free_only') {
          return liveStatus.isFree && !liveStatus.isPractice;
        } else if (state.statusFilter === 'free_practice') {
          return liveStatus.isFree;
        }
      } else if (state.selectedSlot !== 'all') {
        const targetSlot = STANDARD_TIME_SLOTS.find(s => s.id === state.selectedSlot);
        if (targetSlot) {
          const slotStatus = checkRoomSlotStatus(room, state.selectedDay, targetSlot);
          if (state.statusFilter === 'free_only' && slotStatus.status !== 'free') return false;
          if (state.statusFilter === 'free_practice' && slotStatus.status === 'busy') return false;
        }
      } else {
        // 'all' slot mode
        if (state.statusFilter === 'free_only') {
          // Has at least one free interval today
          const intervals = getFreeIntervalsForDay(room, state.selectedDay);
          return intervals.length > 0;
        }
      }

      return true;
    });
  }

  // Render Lab Cards View
  function renderCards() {
    const filteredRooms = filterRooms();

    // Update Header Text
    const slotLabel = state.selectedSlot === 'current'
      ? 'Right Now'
      : state.selectedSlot === 'all'
        ? 'All Day'
        : (STANDARD_TIME_SLOTS.find(s => s.id === state.selectedSlot)?.label || '');

    elements.resultsTitle.textContent = `${state.selectedDay} • ${slotLabel}`;
    elements.resultsCount.textContent = `Showing ${filteredRooms.length} of ${LAB_ROOMS_DATA.length} labs`;

    if (filteredRooms.length === 0) {
      elements.cardsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 3rem 1.5rem; text-align: center; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px solid var(--border-color);">
          <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🔍</div>
          <h4 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">No matching lab rooms found</h4>
          <p style="color: var(--text-muted); font-size: 0.9rem; max-width: 450px; margin: 0 auto;">Try switching to another time slot, changing the status filter to include practice hours, or searching a different keyword.</p>
        </div>
      `;
      return;
    }

    let cardsHtml = '';
    filteredRooms.forEach(room => {
      const daySchedule = (room.schedule[state.selectedDay] || []).slice().sort((a,b) => timeToMinutes(a.start) - timeToMinutes(b.start));
      const freeIntervals = getFreeIntervalsForDay(room, state.selectedDay);
      const liveStatus = getRoomLiveStatus(room, state.selectedDay, state.currentTimeMin);

      let cardStatusClass = 'is-free';
      let statusBadgeHtml = '';
      let highlightHtml = '';

      if (state.selectedSlot === 'current') {
        if (liveStatus.status === 'free') {
          cardStatusClass = 'is-free';
          const untilStr = liveStatus.freeUntilMin ? `Until ${minutesToTime12(liveStatus.freeUntilMin)}` : 'Rest of Day';
          statusBadgeHtml = `<span class="status-badge free">🟢 Free Now</span>`;
          highlightHtml = `
            <div class="availability-highlight">
              <div class="highlight-label">Current Availability</div>
              <div class="highlight-time">Available ${untilStr}</div>
            </div>
          `;
        } else if (liveStatus.status === 'practice') {
          cardStatusClass = 'is-practice';
          statusBadgeHtml = `<span class="status-badge practice">🔵 Practice Hour</span>`;
          highlightHtml = `
            <div class="availability-highlight">
              <div class="highlight-label">Open for Student Practice</div>
              <div class="highlight-time" style="color: var(--color-practice);">Until ${minutesToTime12(liveStatus.endsAtMin)}</div>
            </div>
          `;
        } else {
          cardStatusClass = 'is-busy';
          statusBadgeHtml = `<span class="status-badge busy">🔴 Class Running</span>`;
          highlightHtml = `
            <div class="availability-highlight">
              <div class="highlight-label">Current Class: ${liveStatus.currentClass.course}</div>
              <div class="highlight-time" style="color: var(--color-busy);">Ends at ${minutesToTime12(liveStatus.endsAtMin)}</div>
            </div>
          `;
        }
      } else if (state.selectedSlot !== 'all') {
        const targetSlot = STANDARD_TIME_SLOTS.find(s => s.id === state.selectedSlot);
        const slotStatus = checkRoomSlotStatus(room, state.selectedDay, targetSlot);

        if (slotStatus.status === 'free') {
          cardStatusClass = 'is-free';
          statusBadgeHtml = `<span class="status-badge free">🟢 Free This Slot</span>`;
          highlightHtml = `
            <div class="availability-highlight">
              <div class="highlight-label">Selected Slot Status</div>
              <div class="highlight-time">100% Free & Unoccupied</div>
            </div>
          `;
        } else if (slotStatus.status === 'practice') {
          cardStatusClass = 'is-practice';
          statusBadgeHtml = `<span class="status-badge practice">🔵 Practice Hour</span>`;
          highlightHtml = `
            <div class="availability-highlight">
              <div class="highlight-label">Selected Slot Status</div>
              <div class="highlight-time" style="color: var(--color-practice);">Open for Lab Practice</div>
            </div>
          `;
        } else {
          cardStatusClass = 'is-busy';
          statusBadgeHtml = `<span class="status-badge busy">🔴 Class in Session</span>`;
          highlightHtml = `
            <div class="availability-highlight">
              <div class="highlight-label">Class Running</div>
              <div class="highlight-time" style="color: var(--color-busy);">${slotStatus.classes.map(c => c.course).join(', ')}</div>
            </div>
          `;
        }
      } else {
        // All-day view: Show major free window
        if (daySchedule.length === 0) {
          cardStatusClass = 'is-free';
          statusBadgeHtml = `<span class="status-badge free">🟢 Free All Day</span>`;
          highlightHtml = `
            <div class="availability-highlight">
              <div class="highlight-label">Entire Day Free</div>
              <div class="highlight-time">08:00 AM - 08:00 PM <span class="duration-pill">Full Day</span></div>
            </div>
          `;
        } else {
          const totalFreeMins = freeIntervals.reduce((sum, item) => sum + item.durationMins, 0);
          const hours = Math.floor(totalFreeMins / 60);
          const mins = totalFreeMins % 60;
          const durStr = `${hours}h ${mins > 0 ? mins + 'm' : ''} total free`;

          statusBadgeHtml = `<span class="status-badge free">🟢 ${freeIntervals.length} Free Window${freeIntervals.length > 1 ? 's' : ''}</span>`;
          highlightHtml = `
            <div class="availability-highlight">
              <div class="highlight-label">Total Daily Availability</div>
              <div class="highlight-time">${durStr} <span class="duration-pill">${daySchedule.length} Classes</span></div>
            </div>
          `;
        }
      }

      // Timeline entries
      let timelineHtml = '<div class="slot-timeline">';
      if (daySchedule.length === 0) {
        timelineHtml += `
          <div class="slot-item free-slot">
            <span class="slot-time">08:00 AM - 08:00 PM</span>
            <span class="slot-info" style="color: var(--color-free);">No classes scheduled</span>
          </div>
        `;
      } else {
        daySchedule.slice(0, 4).forEach(slot => {
          const isPrac = slot.isPractice;
          const slotClass = isPrac ? 'practice-slot' : 'busy-slot';
          timelineHtml += `
            <div class="slot-item ${slotClass}">
              <span class="slot-time">${slot.start} - ${slot.end}</span>
              <div class="slot-info">
                <div>${slot.course}</div>
                <div class="slot-faculty">${slot.faculty || ''}</div>
              </div>
            </div>
          `;
        });
        if (daySchedule.length > 4) {
          timelineHtml += `
            <div style="text-align: center; font-size: 0.75rem; color: var(--text-muted); padding: 0.2rem 0;">
              + ${daySchedule.length - 4} more sessions scheduled
            </div>
          `;
        }
      }
      timelineHtml += '</div>';

      cardsHtml += `
        <div class="lab-card ${cardStatusClass}" data-room-id="${room.id}">
          <div class="card-top">
            <div class="room-meta">
              <div class="room-badge-row">
                <span class="room-number">Room ${room.roomNumber}</span>
                <span class="floor-tag">${room.floor}</span>
              </div>
              <div class="room-full-name">${room.name}</div>
            </div>
            ${statusBadgeHtml}
          </div>

          ${highlightHtml}
          ${timelineHtml}

          <div class="card-actions">
            <button type="button" class="btn-card primary view-routine-btn" data-room-id="${room.id}">
              📅 Weekly Routine
            </button>
          </div>
        </div>
      `;
    });

    elements.cardsGrid.innerHTML = cardsHtml;

    // Attach click listeners to "Weekly Routine" buttons
    elements.cardsGrid.querySelectorAll('.view-routine-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const rId = e.currentTarget.getAttribute('data-room-id');
        const rObj = LAB_ROOMS_DATA.find(r => r.id === rId);
        if (rObj) openRoomModal(rObj);
      });
    });
  }

  // Render Heatmap Matrix View
  function renderMatrix() {
    // Generate Header with standard slots
    let headHtml = `
      <tr>
        <th class="room-col-header">Lab Room</th>
    `;
    STANDARD_TIME_SLOTS.forEach(slot => {
      headHtml += `<th>${slot.label}</th>`;
    });
    headHtml += `</tr>`;
    elements.matrixTableHead.innerHTML = headHtml;

    // Filter rooms by floor
    const filteredRooms = LAB_ROOMS_DATA.filter(room => {
      if (state.selectedFloor !== 'all') {
        if (state.selectedFloor === '2nd' && !room.floor.includes('2nd')) return false;
        if (state.selectedFloor === '4th' && !room.floor.includes('4th')) return false;
        if (state.selectedFloor === '5th' && !room.floor.includes('5th')) return false;
      }
      return true;
    });

    let bodyHtml = '';
    filteredRooms.forEach(room => {
      bodyHtml += `
        <tr>
          <td class="room-title-cell">
            <strong>Room ${room.roomNumber}</strong><br>
            <span style="font-size: 0.72rem; color: var(--text-muted);">${room.shortName}</span>
          </td>
      `;

      STANDARD_TIME_SLOTS.forEach(slot => {
        const slotStatus = checkRoomSlotStatus(room, state.selectedDay, slot);

        if (slotStatus.status === 'free') {
          bodyHtml += `
            <td class="matrix-cell-free" title="Room ${room.roomNumber} is FREE during ${slot.label}" onclick="window.ewuApp.openRoomModalById('${room.id}')">
              🟢 FREE
            </td>
          `;
        } else if (slotStatus.status === 'practice') {
          bodyHtml += `
            <td class="matrix-cell-practice" title="Practice Hour in Room ${room.roomNumber}" onclick="window.ewuApp.openRoomModalById('${room.id}')">
              🔵 PRACTICE
            </td>
          `;
        } else {
          const courseNames = slotStatus.classes.map(c => c.course).join('<br>');
          const facNames = slotStatus.classes.map(c => c.faculty ? `[${c.faculty}]` : '').filter(Boolean).join(' ');
          bodyHtml += `
            <td class="matrix-cell-busy" title="Occupied: ${courseNames} by ${facNames}" onclick="window.ewuApp.openRoomModalById('${room.id}')">
              <strong>${courseNames}</strong><br>
              <span style="font-size: 0.7rem; color: var(--text-muted);">${facNames}</span>
            </td>
          `;
        }
      });

      bodyHtml += `</tr>`;
    });

    elements.matrixTableBody.innerHTML = bodyHtml;
  }

  // Expose helper globally for matrix table cell clicks
  window.ewuApp = {
    openRoomModalById: function (id) {
      const room = LAB_ROOMS_DATA.find(r => r.id === id);
      if (room) openRoomModal(room);
    }
  };

  // Run on load
  document.addEventListener('DOMContentLoaded', init);
})();
