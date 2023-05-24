import { useState, useEffect } from 'react';
import { collection, query, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from './services/firebase.config';
import DateTime from './components/DateTime';
import Form from './components/Form';
import Win from './components/Win';

function App() {
  const [fetchWins, setFetchWins] = useState([]);
  
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
    await deleteDoc(doc(db, 'wins', id));
    window.location.reload();
  }
 
  const winsNoun = fetchWins.length !== 1 ? "Accomplishments" : "Accomplishment";
  const winsHeading = `${fetchWins.length} ${winsNoun} Today!`

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card card-white">
              <div className="card-body">
                <h1>Momentum: Celebrate Your Wins</h1>
                <DateTime />
                <Form />
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
