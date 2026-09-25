 const circle_preset = {
    circles: [
    { id: 'c1', name: 'Circle 1: Sophomore Freaks', tag: 'C1', code: '#HAU-2026' },
    { id: 'c2', name: 'Circle 2: Hour.ly: IntroWeb Finals', tag: 'C2', code: '#DEVBATCH' }
    ]
}

function circlegrid() {
    const container = document.getElementById('circlescontainer')
    container.innerHTML = ''

    circle_preset.circles.forEach(circle => {
        const isSelected = circle.id === circle_preset.activeCircleId
        const card = document.createElement('div')
        card.className = `circlecard ${isSelected ? 'selected' : ''}`
        card.innerHTML = `
            <div class="firstonejs">
                <div class="firsttwojs">${circle.tag}</div>
                <span class="firstthirdjs">${circle.code}</span>
            </div>
            <section class="presetcardclassjs">
                <div>
                    <h3>${circle.name}</h3>
                    <p>Click to open shared hourly calendar</p>
                </div>
            </section>
        `
        container.appendChild(card)
    })

    const joinlastcard = document.createElement('div')
    joinlastcard.className = 'circlecard joincard'
    joinlastcard.innerHTML = `
        <div class="joiniconbox">
            <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
        </div>
        <div>
            <span class="presetjoincardclassonejs">Join a new Circle</span>
            <span class="presetjoincardclasstwojs">Enter preset code or link</span>
        </div>
    `
    container.appendChild(joinlastcard)
}

document.addEventListener('DOMContentLoaded', circlegrid());