/*Приложение "Великий человек"*/

import React, { useEffect, useState } from "react";
import './Task1_Style.css'


const person = {
    personName: 'Луи Пастер',
    personBirthDate: '27.12.1822',
    personBirthPlace: 'Доль, Франция',
    personPhoto: 'Louis_Paster.jpg'
};



class Title extends React.Component {
    render() {
        return <h1>{person.personName}</h1>
    }
}

class InfoComponent extends React.Component {
    render() {
        return <p><strong>{this.props.category} </strong>{this.props.info}</p>
    }
}

class InfoPhoto extends React.Component {
    render() {
        return <img src={person.personPhoto} alt={person.personPhoto} />
    }
}

/*Тут текст извлекается из txt файла в папке public */
function InfoBio() {
    const [text, setText] = useState('');

    useEffect(() => {
        fetch('/PasterBio.txt')
            .then(response => response.text())
            .then(data => {
                setText(data);
            })
            .catch(error => {
                console.error('Error fetching the file:', error);
            });
    }, []);

    return (
        <div>
            <pre>{text}</pre>
        </div>
    );
}



export function GreatPerson() {
    return (
        <div className="person_info">
            <div className="info_card">
                <div classname="info_card_text">
                    <Title></Title>
                    <InfoComponent category="Дата рождения: " info={person.personBirthDate}></InfoComponent>
                    <InfoComponent category="Место рождения: " info={person.personBirthPlace}></InfoComponent>
                </div>
                <div className="info_card_photo">
                    <InfoPhoto></InfoPhoto>
                </div>
            </div>

            <div className="bio">
                <InfoBio></InfoBio>
            </div>
        </div>
    );
}