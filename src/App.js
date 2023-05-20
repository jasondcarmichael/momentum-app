import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { collection, query, onSnapshot, deleteDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './services/firebase.config';
import DateTime from './components/DateTime';
import Form from './components/Form';
import Win from './components/Win';

function App(props) {
  const [fetchWins, setFetchWins] = useState([]);
  
  const [wins, setWins] = useState(props.wins);

  useEffect(()=> {
    const q = query(collection(db, 'wins'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let winsArr = []
        querySnapshot.forEach((doc) => {
            winsArr.push({...doc.data(), id: doc.id})
        });
        setFetchWins(winsArr)
        console.log(winsArr)
    })
    return () => unsubscribe()
  }, [])

  const deleteWin = async (id) => {
    window.confirm("Are you sure you want to delete this accomplishment?")
    await deleteDoc(doc(db, 'wins', id))
  }

  // const editWin = async (win) => {
  //   await updateDoc(doc(db, 'wins', win.id), {
  //     text: updateWin,
  //     timestamp: serverTimestamp()
  //   })
  // }


  
  function addWin(name) {
    const newWin = { id: `win-${nanoid()}`, name};
    setWins([...wins, newWin])
  }


  // function editWin(id, newName) {
  //   const editedWinsList = wins.map((win) => {
  //     if (id === win.id) {
  //       return { ...win, name: newName };
  //     }
  //     return win;
  //   });
  //   setWins(editedWinsList)
  // }

  const winsNoun = fetchWins.length !== 1 ? "accomplishments" : "accomplishment";
  const winsHeading = `${fetchWins.length} ${winsNoun} today!`


  return (
    <>
      <h1 className="header-lg">Momentum</h1>
      <h2> Celebrate Your Daily Wins </h2>
      <DateTime />
      <Form addWin={addWin}/>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                {fetchWins.length < 1 ? null : 
                  <h3 id="list-heading" tabIndex="-1">
                  {winsHeading}
                  </h3>
                }
                <div className="wins-list">
                  {fetchWins.map((win, index)=> (
                    <Win 
                      win={win}  
                      key={index}
                      deleteWin={deleteWin}
                      // editWin={editWin}
                    />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
