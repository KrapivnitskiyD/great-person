/*приложение "футбольный клуб"*/
import React from "react";
import './Task2_Style.css'


function InfoComponent(props) {
    return (
        <p><strong>{props.category} </strong>{props.info}</p>
    );
}

function ClubInfo() {
    const info = {
        teamName: 'FC Barcelona',
        city: 'Барселона, Испания',
        date: '29.11.1899',
        emblem: "FC_Barcelona.png"
    };
    return (
        <div className="club_info">
            <h1>{info.teamName}</h1>
            <div className="img">
                <img src={info.emblem} alt={info.emblem} />
            </div>
            <InfoComponent category="Город основания: " info={info.city}></InfoComponent>
            <InfoComponent category="Дата основания: " info={info.date}></InfoComponent>
        </div>
    );
}

function ClubAwards() {
    const awardsList = [
        'Ла Лига (чемпионат Испании): 27 раз (по состоянию на 2023 год)',
        'Кубок Испании (Копа дель Рей): 31 раз (рекорд)',
        'Суперкубок Испании: 14 раз',
        'Лига чемпионов УЕФА: 5 раз (1992, 2006, 2009, 2011, 2015)',
        'Суперкубок УЕФА: 5 раз',
        'Клубный чемпионат мира: 3 раза (2009, 2011, 2015)',
        'Кубок обладателей кубков УЕФА: 4 раза'
    ]
    return (
        <div className="club_awards">
            <h2>Награды и достижения клуба</h2>
            <ul>
                {awardsList.map((award, index) => (
                    <li key={index}>{award}</li>
                ))}
            </ul>
        </div>
    );
}

function ClubTeam() {
    const teamList = {
        goalKeepers: [
            'Марк-Андре тер Стеген',
            'Иняки Пенья'
        ],
        defenders: [
            'Жюль Кунде',
            'Рональд Араухо',
            'Андреас Кристенсен',
            'Алехандро Бальде',
            'Жоау Канселу'
        ],
        midfielders: [
            'Френки де Йонг',
            'Педри',
            'Гави',
            'Илкай Гюндоган',
            'Орель Ромеу'
        ],
        forwards: [
            'Роберт Левандовски',
            'Ферран Торрес',
            'Ансу Фати',
            'Рафинья'
        ]
    };
    return (
        <div className="club_team">
            <h2>Текущий состав клуба (сезон 2023/2024)</h2>
            <div className="club_team_list">
                <div className="club_team_role">
                    <h3>Вратари:</h3>
                    <ul>
                        {teamList.goalKeepers.map((player, index) => (
                            <li key={index}>{player}</li>
                        ))}
                    </ul>
                </div>

                <div className="club_team_role">
                    <h3>Защитники:</h3>
                    <ul>
                        {teamList.defenders.map((player, index) => (
                            <li key={index}>{player}</li>
                        ))}
                    </ul>
                </div>

                <div className="club_team_role">
                    <h3>Полузащитники:</h3>
                    <ul>
                        {teamList.midfielders.map((player, index) => (
                            <li key={index}>{player}</li>
                        ))}
                    </ul>
                </div>

                <div className="club_team_role">
                    <h3>Нападающие:</h3>
                    <ul>
                        {teamList.forwards.map((player, index) => (
                            <li key={index}>{player}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}




export function FootballClub() {
    return (
        <div className="footballClub">
            <ClubInfo ></ClubInfo>
            <ClubAwards></ClubAwards>
            <ClubTeam></ClubTeam>
        </div>);
}