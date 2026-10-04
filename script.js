const Circles_Presets = {
    MainPage: 'CirclesPage',
    ActiveCircleId: 'HRHAU',
    Circles: [
    { id: 'HRSF', name: 'Sophomore Freaks', tag: 'SF', code: '#BFF', description: 'Student Uncs'},
    { id: 'HRHAU', name: 'IntroWeb Finals', tag: 'HAU', code: '#NW201', description: 'LOCK IN BROS'}
    ],

    JoinableCircles: [
    { id: 'HRHAU2026', name: 'HAU Study Group', tag: 'HAU', code: '#HAU-2026', description: 'Student Uncs'},
    { id: 'HRDEV', name: 'Web Dev Finals', tag: 'DEV', code: '#DEVBATCH', description: 'LOCK IN BROS'}
    ],
    Events: [
    { id: 'e1', circleId: 'HRHAU', title: 'Event 1 HAU', date: '23', startHour: 6, endHour: 7, desc: '6 am - 7 am' },
    { id: 'e2', circleId: 'HRHAU', title: 'Kahit Anong Event', date: '27', startHour: 9, endHour: 11, desc: 'Lab Room 402' },
    { id: 'e3', circleId: 'HRSF', title: 'Basta Event Daw', date: '24', startHour: 14, endHour: 16, desc: 'Conference Call' }
    ]
}

function CreateCircleCard(circle) {
    const card = document.createElement('div')
    card.className = 'CircleCard'
    card.onclick = () => OpenCircle(circle.id)
    card.innerHTML = `
        <div class="FirstOneJS">
            <div class="FirstTwoJS">${circle.tag}</div>
            <span class="FirstThreeJS">${circle.code}</span>
        </div>
        <div class="PresetCardClassJS">   
            <h3>${circle.name}</h3>
            <p>${circle.description}</p>
        </div>
    `
    return card
}

function CreateJoinCard() {
    const card = document.createElement('div')
    card.className = 'CircleCard JoinCard'
    card.onclick = () => OpenPopUp('JoinCardBoi')
    card.innerHTML = `
        <div class="JoinIconBox">
            <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
        </div>
        <div>
            <span class="SpanJoinCardClassOneJS">Join a new Circle</span>
            <span class="SpanJoinCardClassTwoJS">Enter preset code or link</span>
        </div>
    `
    return card
}

function CardsInActionBaby() {
    const container = document.getElementById('CirclesEmptyContainer')
    container.innerHTML = ''

    Circles_Presets.Circles.forEach(circle => {
        container.appendChild(CreateCircleCard(circle))
    })

    container.appendChild(CreateJoinCard());
}


CardsInActionBaby()

function OpenPopUp(PopUpID) {
    document.getElementById(PopUpID).classList.add('active')
}

function ClosePopUp(PopUpID) {
    document.getElementById(PopUpID).classList.remove('active')
}

function CreateCircleFunction(e) {
    e.preventDefault()
    const name = document.getElementById('InputCircleName').value
    const tag = document.getElementById('InputCircleTag').value.toUpperCase()
    const newId = 'HR' + document.getElementById('InputCircleTag').value.toUpperCase()
    const newCode = '#' + document.getElementById('InputCircleCode').value.toUpperCase()
    // Six seven
    const description = 'Edit custom description'
    Circles_Presets.Circles.push({ id: newId, name, tag, code: newCode, description})
    ClosePopUp('CreateCardBoi')
    document.getElementById('InputCircleName').value = ''
    document.getElementById('InputCircleTag').value = ''
    
    CardsInActionBaby()
    RenderSidebarCircles()
    OpenCircle(newId)
    ShowToast(`Circle "${name}" created successfully!`)
            
}

function SwitchPage(PageID) {
    Circles_Presets.MainPage = PageID

    document.querySelectorAll('.UniversalActivePageIndicator').forEach(el => el.classList.remove('active-view'))
    document.getElementById(`view-${PageID}`).classList.add('active-view');

    ['CirclesPage', 'Calendar', 'AddEvent'].forEach(v => {
        document.getElementById(`nav-btn-${v}`).classList.toggle('active', v === PageID)
    })



    if (PageID === 'Calendar') {
        RenderSidebarCircles()
        RenderHourlyGrid()
        UpdateActiveCircleDisplay()
    } else if (PageID === 'AddEvent') {
        PopulateEventCircleSelect()
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

function HandleJoinCircle(e) {
    e.preventDefault()
    let code = document.getElementById('InputJoinCode').value.trim().toUpperCase()
    if (!code.startsWith('#')) code = '#' + code

    if (Circles_Presets.Circles.find(c => c.code === code)) {
        ShowToast('You are already in that circle!')
        return
    }

    const found = Circles_Presets.JoinableCircles.find(c => c.code === code)
    if (!found) {
        ShowToast('No circle found with that code.')
        return
    }

    Circles_Presets.Circles.push(found)
    ClosePopUp('JoinCardBoi')
    document.getElementById('InputJoinCode').value = ''

    CardsInActionBaby()
    RenderSidebarCircles()
    OpenCircle(found.id)
    ShowToast(`Joined "${found.name}"!`)
}

function OpenCircle(CircleID) {
    Circles_Presets.ActiveCircleId = CircleID
    SwitchPage('Calendar')
}


function RenderSidebarCircles() {
    const list = document.getElementById('SidebarCirclesList')
    list.innerHTML = ''

    Circles_Presets.Circles.forEach(circle => {
        const isActive = circle.id === Circles_Presets.ActiveCircleId
        const btn = document.createElement('button')
        btn.className = `SidebarCircleBtn ${isActive ? 'active' : ''}`
        btn.onclick = () => {
            Circles_Presets.ActiveCircleId = circle.id
            RenderSidebarCircles()
            RenderHourlyGrid()
            UpdateActiveCircleDisplay()
        }
        btn.innerHTML = `
            <div class="SidebarTag">${circle.tag}</div>
            <span class="SidebarName">${circle.name}</span>
        `
        list.appendChild(btn)
    })
}

RenderSidebarCircles()

function UpdateActiveCircleDisplay() {
    const circle = Circles_Presets.Circles.find(c => c.id === Circles_Presets.ActiveCircleId)
    if (!circle) return
    document.getElementById('ActiveCircleBadge').innerText = circle.tag
    document.getElementById('ActiveCircleTitle').innerText = circle.name
    document.getElementById('ActiveCircleCode').innerText = circle.code
}

function RenderMiniCalendar() {
    const container = document.getElementById('MiniCalDays')
    container.innerHTML = ''

    for (let i = 0; i < 3; i++) {
        container.appendChild(document.createElement('div'))
    }
    for (let d = 1; d <= 31; d++) {
        const dayEl = document.createElement('div')
        dayEl.className = `MiniCalDay ${d === 23 ? 'active' : ''}`
        dayEl.innerText = d
        container.appendChild(dayEl)
    }
}

RenderMiniCalendar()

function RenderHourlyGrid() {
    const container = document.getElementById('HourlyGridContainer')
    container.innerHTML = ''

    const hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
    const dates = ['23', '24', '25', '26', '27', '28']

    hours.forEach(hour => {
        const row = document.createElement('div')
        row.className = 'HourRow'

        const timeLabel = document.createElement('div')
        timeLabel.className = 'TimeLabel'
        timeLabel.innerText = hour === 12 ? '12 pm' : hour > 12 ? `${hour - 12} pm` : `${hour} am`
        row.appendChild(timeLabel)

        dates.forEach(dateStr => {
            const cell = document.createElement('div')
            cell.className = 'HourCell'

            const matchingEvents = Circles_Presets.Events.filter(e => e.circleId === Circles_Presets.ActiveCircleId && e.date === dateStr && e.startHour <= hour && e.endHour > hour)

            matchingEvents.forEach(ev => {
                const card = document.createElement('div')
                card.className = 'EventCardItem'
                card.innerHTML = `
                    <div>
                        <div class="EventTitle">${ev.title}</div>
                        <div class="EventTime">${ev.desc || `${ev.startHour}:00 - ${ev.endHour}:00`}</div>
                    </div>
                    <div class="EventShared">
                        <span>👤 Shared</span>
                    </div>
                `
                cell.appendChild(card)
            })

            row.appendChild(cell)
        })

        container.appendChild(row)
    })
}

RenderHourlyGrid()

function PopulateEventCircleSelect() {
    const select = document.getElementById('EventCircleSelect')
    select.innerHTML = ''
    Circles_Presets.Circles.forEach(c => {
        const opt = document.createElement('option')
        opt.value = c.id
        opt.innerText = c.name
        if (c.id === Circles_Presets.ActiveCircleId) opt.selected = true
        select.appendChild(opt)
    })
}


PopulateEventCircleSelect()

function HandleEventSubmit(e) {
    e.preventDefault()
    const circleId = document.getElementById('EventCircleSelect').value
    const title = document.getElementById('EventTitleInput').value
    const date = document.getElementById('EventDateInput').value
    const startHour = parseInt(document.getElementById('EventStartInput').value)
    const endHour = parseInt(document.getElementById('EventEndInput').value)
    const desc = document.getElementById('EventDescInput').value || `${startHour}:00 - ${endHour}:00`

    if (startHour >= endHour) {
        ShowToast('End time must be after start time!')
        return
    }

    Circles_Presets.Events.push({ id: 'e_' + Date.now(), circleId, title, date, startHour, endHour, desc })
    Circles_Presets.ActiveCircleId = circleId

    ShowToast(`Event "${title}" successfully added!`)
    document.getElementById('AddEventForm').reset()
    SwitchPage('Calendar')
}

function HandleLogout() {
    ShowToast('Logged out successfully. (Demo Mode)')
    setTimeout(() => SwitchPage('CirclesPage'), 1000)
}

function ShowToast(message) {
    const toast = document.getElementById('ToastBoi')
    document.getElementById('ToastMessage').innerText = message
    toast.classList.add('show')
    setTimeout(() => toast.classList.remove('show'), 3500)
}

UpdateActiveCircleDisplay()
