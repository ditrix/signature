import React, {UseRef} from 'react';
import Popup from 'reactjs-popup'
import SignaturePad from 'react-signature-canvas'
import './App.css';
import './sigCanvas.css'


function App() {


  return (
    <div className="App">
        <h1>Signature Pad code example</h1>
        <Popup 
          modal 
          trigger={<button>open signature pad</button>}
          closeOnDocumentClick={false}
        > 

       

          {close=>(

            <>
            <SignaturePad  
              canvasProps={{className:"signatureCanvas"}}

            />
         

            <button onClick={close}>close</button>

            </>
          )}
           
        
        </Popup>
        
    </div>
  );
}

export default App;
