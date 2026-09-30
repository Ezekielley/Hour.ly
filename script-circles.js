 const Circles_Presets = {
    MainPage: 'CirclesPage',
    Circles: [
    { id: 'HRSF', name: 'Sophomore Freaks', tag: 'SF', code: '#BFF', description: 'Student Uncs'},
    { id: 'HRHAU', name: 'IntroWeb Finals', tag: 'HAU', code: '#NW201', description: 'LOCK IN BROS'}
    ]
}

function CreateCircleCard(circle) {
    const card = document.createElement('div')
    card.className = 'CircleCard'
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
            
}

function SwitchPage(PageID) {
    Circles_Presets.MainPage = PageID

    document.querySelectorAll('.UniversalActivePageIndicator').forEach(el => el.classList.remove('active-view'))
    document.getElementById(`view-${PageID}`).classList.add('active-view');

    ['CirclesPage', 'Calendar', 'AddEvent'].forEach(v => {
        document.getElementById(`nav-btn-${v}`).classList.toggle('active', v === PageID)
    })
}
