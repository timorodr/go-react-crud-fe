import React, {useState, useEffect} from "react";
import axios from "axios"
import {Button, Form, Container, Modal} from 'react-bootstrap'
import Entry from './single-entry.component'

const Entries = () => {
    return(
        <div>
            <Container>
                <Button onClick={() => setAddNewEntry(true)}>Track today's calories</Button>
            </Container>
            <Container>
            {entries != null && entries.map((entry, i) => (
                <Entry entryData={entry} deleteSingleEntry={deleteSingleEntry} setChangeIngredient={setChangeIngredient} setChangeEntry={setChangeEntry}/>
            ))}
            </Container>
        </div>
    )
}

// call api's

function addSingleEntry(){
    setAddNewEntry(false)
    let URL = "http://localhost:8000/entry/create"
    axios.post(URL, {
        "ingredients": newEntry.ingredients,
        "dish": newEntry.dish,
        "calories": newEntry.calories,
        "fat": parseFloat(newEntry.fat)
    }).then(response => {
        if(response.status == 200){
            setFreshData(true)
        }
    })
}

function deleteSingleEntry(id){
    let URL = "http://localhost:8000/entry/delete" + id
    axios.delete(URL, {

    }).then(response => {
        if(response.status == 200){
            setFreshData(true)
        }
    })
}