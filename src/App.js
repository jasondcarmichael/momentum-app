// import './App.css';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { db } from './services/firebase.config';
import DateTime from './components/DateTime';
import Form from './components/Form';
import Win from './components/Win';

function App(props) {
  // const collectionRef = collection(db, 'win');
  const [fetchWins, setFetchWins] = useState([]);

  const [wins, setWins] = useState(props.wins);

  // useEffect(() => {
  //   const getWins = async () => {
  //     await getDocs(collectionRef).then((win) => {
  //       let winsData = win.docs.map((doc) => ({ ...doc.data(), id: doc.id}))
  //       setFetchWins(winsData);
     
  //     }).catch((err) => {
  //       console.log(err);
  //     })
  //   }
  //   getWins(); 
  // }, [collectionRef]);

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


  
  function addWin(name) {
    const newWin = { id: `win-${nanoid()}`, name};
    setWins([...wins, newWin])
  }

  function deleteWin(id) {
    const remainingWins = wins.filter((win) => id !== win.id);
    setWins(remainingWins);
  }

  function editWin(id, newName) {
    const editedWinsList = wins.map((win) => {
      if (id === win.id) {
        return { ...win, name: newName };
      }
      return win;
    });
    setWins(editedWinsList)
  }

  // const winsList = fetchWins.map(({ win, id }) => (
  //   <Win 
  //     id={id} 
  //     name={win}  
  //     key={id}
  //     deleteWin={deleteWin}
  //     editWin={editWin}
  //   />
  // ));

  // const winsList = wins.map((win) => (
  //   <Win 
  //     id={win.id} 
  //     name={win.name} 
  //     completed={win.completed} 
  //     key={win.id}
  //     deleteWin={deleteWin}
  //     editWin={editWin}
  //   />
  // ));

  
  // const winsNoun = winsList.length !== 1 ? "accomplishments" : "accomplishment";
  // const winsHeading = `${winsList.length} ${winsNoun} today!`


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
                <h3 id="list-heading" tabIndex="-1">
                  {/* {winsHeading} */}
                </h3>
                <div className="wins-list">
                  {fetchWins.map((win, index)=> (
                    <Win 
                    // id={id} 
                    win={win}  
                    key={index}
                    deleteWin={deleteWin}
                    editWin={editWin}
                  />
                  ))}
                  {/* {winsList} */}
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
