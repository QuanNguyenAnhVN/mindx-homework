import React from 'react'
import './SS2.css'

export default function SS2() {
    return (
        <section>
            <div className='SS2-container'>
                <h1> 2️⃣ Session 2: Next-gen Javascript</h1>
                <h2>Yes/No Questions</h2>
                <ol id='YNQ-SS2'>
                    <li>False</li>
                    <li>True</li>
                    <li>foo: 1, bar: 2</li>
                    <li>'The quick brown fox jumps over the lazy dog.’</li>
                    <li>undefined</li>
                    <li>Error</li>
                    <li>[1, 23, 4]</li>
                    <li>3</li>
                    <li>a = 12, b = 12</li>
                    <li>name: “MindX”</li>
                    <li>[1, 2, 3, 4, 5]</li>
                    <li>16</li>
                </ol>

                <h2>Coding Questions</h2>
                <ol id='CQ-SS2'>
                    <li><input id='SS2-01' type="text" /> <button onClick={SS2_01}> Change</button> <span id='SS2-01-result'></span></li>
                    <li><input id='SS2-02' type="text" /> <button onClick={SS2_02}> Change</button> <span id='SS2-02-result'></span></li>
                    <li><input id='SS2-03' type="text" /> <button onClick={SS2_03}> Change</button> <span id='SS2-03-result'></span></li>
                    <li><button id='contact_select' onClick={SS2_04}>Contact</button></li>
                    <div id='SS2-04'>
                        <div className='add-item'>
                            <input type="text" placeholder='Name' id='inputName' />
                            <input type="text" placeholder='Phone No' id='inputPhone' />
                            <button onClick={addNewContact()}>Add</button>
                        </div>
                        <hr />
                        <div className='contact-list'>
                            <input type="text" placeholder='Search' id='inputSearch' />
                            <button>Search</button>
                            <button>Delete Duplicate</button>
                            <table id='displayContacts' className='table'></table>
                        </div>
                    </div>
                </ol>
            </div>
        </section>
    )
}


function SS2_01() {
    var str01 = document.getElementById('SS2-01').value;
    var array01 = str01.split("");
    var reverseArray01 = array01.reverse();
    var newArray01 = reverseArray01.join("");
    document.getElementById('SS2-01-result').innerHTML = "The result is: " + newArray01;
}

function SS2_02() {
    var str02 = document.getElementById('SS2-02').value;
    if (isNaN(str02)) {
        document.getElementById('SS2-02-result').innerHTML = "Input must be a number ";
    } else {
        var newArray02 = [...new Set(str02)];
        document.getElementById('SS2-02-result').innerHTML = "The result is: " + newArray02;
    }
}

function SS2_03() {
    var str03 = document.getElementById('SS2-03').value;
    if (isNaN(str03)) {
        document.getElementById('SS2-03-result').innerHTML = "Input must be a number ";
    } else {
        var array03 = str03.split("");
        var mf = 1;
        var x = 0;
        var no;
        for (var i = 0; i < array03.length; i++) {
            for (var j = i; j < array03.length; j++) {
                if (array03[i] === array03[j])
                    x++;
                if (mf < x) {
                    mf = x;
                    no = array03[i];
                }
            }
            x = 0;
        }
        document.getElementById('SS2-03-result').innerHTML = "The result is: " + "value: " + no + ", " + "count: " + mf;
    }
}

function SS2_04() {
    document.getElementById('SS2-04').style.display = "block";

}

function Contact(name, phone) {
    this.name = name;
    this.phone = phone;
}

var contacts = [];
contacts.push(new Contact("Quan", "0865926335"));

function listContacts() {
    document.getElementById('displayContacts').innerHTML = "";
    for (var i = 0; i < contacts.length; i++) {
        document.getElementById('displayContacts').innerHTML += '<tr><td id="name' + i + '">' + contacts[i].name + '</td><td id="phone' + i + '">' + contacts[i].phone;
    }
}

function addNewContact() {
    var name = document.getElementById('inputName').value;
    var phone = document.getElementById('inputPhone').value;
    console.log(name);
    console.log(phone);
    var contact = new Contact(name, phone);
    contacts.push(contact);
    listContacts();
}

listContacts();