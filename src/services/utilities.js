import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, doc, deleteDoc, query, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase.config';


const collectionRef = collection(db, 'win');

// Create and Post (From Form.js)
const [createWin, setCreateWin] = useState("");

function handleChange(e) {
    setCreateWin(e.target.value);
 };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await addDoc(collectionRef, {
            win: createWin,
            timestamp: serverTimestamp()
        })
        window.location.reload();
    } catch (err) {
        console.log(err)
    }
}

// Get Data (From App.js)

const [fetchWins, setFetchWins] = useState([]);

useEffect(() => {
    const getWins = async () => {
      await getDocs(collectionRef).then((win) => {
        let winsData = win.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
        setFetchWins(winsData);
     
      }).catch((err) => {
        console.log(err);
      })
    }
    getWins();
    
  }, [collectionRef]);

// Delete Data

const deleteWin = async (id) => {
    try {
        window.confirm("Are you sure you want to delete this accomplishment?")
        const documentRef = doc(db, "win", id);
        await deleteDoc(documentRef)
        window.location.reload();
    } catch (err) {
        console.log(err)
    }
}

// Edit Data

/// FETCH from Video
useEffect(()=> {
    const q = query(collection(db, 'wins'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let winsArr = []
        querySnapshot.forEach((doc) => {
            winsArr.push({...doc.data(), id: doc.id})
        });
        setFetchWins(winsArr)
    })
    return () => unsubscribe()
}, [])