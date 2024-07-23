import { useState } from 'react'
import './App.css'

function App() {
  const [] = useState(0)

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      <img src="./src/assets/Instagiftify Logo.png" alt="" width="auto" height="50"></img>
    </a>
    <a class="navbar-brand" href="#" style={{fontFamily:"Satisfy"}}>Instagiftify</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
        <li class="nav-item dropdown">
  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Products
  </a>
  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
    <li><a class="dropdown-item" href="#">Mini Combo</a></li>
    <li><a class="dropdown-item" href="#">Mini Frame</a></li>
    <li><a class="dropdown-item" href="#">Photo Album</a></li>
  </ul>
</li>

      </ul>
    </div>
  </div>
</nav>


<div className="card" style={{ width: '100%', maxWidth: '100%', margin: '0 auto' }}>
  <div className="card-body" style={{ padding: '0' }}>
      <img src="./src/assets/Untitled (1366 x 150 px).gif" alt="Banner" style={{ width: '100%', display: 'block',borderRadius: '8px',  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }} 
      />
  </div>
</div>




<div className='step_container' style={{marginTop:"20px", height:"auto", width:"150px", backgroundColor:"#e75480", alignContent:"center", borderRadius:"10px", justifyContent:"space-between", margin:"0 auto"}}>
<h1 style={{textAlign:"center",fontStyle:"italic"}}>Steps</h1>
</div>



<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor:"#FFB6C1", marginTop:"20px" }}>
            <div style={{ flex: 1, marginLeft:"10px"}}>
                <img src="./src/assets/Phone.png" alt="Phone" style={{ width: '100%', maxWidth: '100%', height: 'auto' }} />
            </div>
            <div style={{ flex: 2 }}>
              <h2>Step 1</h2>
                <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
                Check prices from the website.
                </p>
            </div>
        </div>
        

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft:"20px", marginTop:"20px"}}>
            <div style={{ flex: 2 }}>
              <h2>Step 2</h2>
                <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
                Take the screenshot of the product you like.

                </p>
            </div>
            <div style={{ flex: 1, marginLeft: '10px' }}>
                <img src="./src/assets/Phone.png" alt="Phone" style={{ width: '100%', maxWidth: '100%', height: 'auto' }} />
            </div>
        </div>


        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor:"#FFB6C1", marginTop:"20px" }}>
            <div style={{ flex: 1, marginLeft:"10px"}}>
                <img src="./src/assets/Phone.png" alt="Phone" style={{ width: '100%', maxWidth: '100%', height: 'auto' }} />
            </div>
            <div style={{ flex: 2 }}>
              <h2>Step 3</h2>
                <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
                Send screenshot of the product in Instagram DM.
                </p>
            </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft:"20px", marginTop:"20px"}}>
            <div style={{ flex: 2 }}>
              <h2>Step 4</h2>
                <p style={{ fontSize: '20px', lineHeight: '1.6' }}>
                Wait for at least 24 hrs for our reply so that we could assist you better.
                </p>
            </div>
            <div style={{ flex: 1, marginLeft: '10px' }}>
                <img src="./src/assets/Phone.png" alt="Phone" style={{ width: '100%', maxWidth: '100%', height: 'auto' }} />
            </div>
        </div>

<div className='step_container' style={{marginTop:"20px", height:"auto", width:"200px", backgroundColor:"#e75480", alignContent:"center", borderRadius:"10px", justifyContent:"space-between", margin:"0 auto", marginTop:"40px"}}>
<h1 style={{textAlign:"center",fontStyle:"italic"}}>Products</h1>
</div>        

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems:"baseline", marginTop:"20px" }}>
        <div className="card" style={{marginTop:"20px", width:"18rem", marginLeft:"20px", borderColor:"#FFB6C1", borderWidth:"4px"}}>
            <img src="./src/assets/Diary.jpg" className="card-img-top" alt="..." style={{width:"auto", height:"242px", objectFit:"cover"}}/>
            <div className="card-body">
                <h2 className="card-text" style={{textAlign:"center"}}>
                    Diary
                </h2>
            </div>
        </div>

        <div className="card" style={{marginTop:"20px", width:"18rem", marginLeft:"20px", borderColor:"#FFB6C1", borderWidth:"4px"}}>
            <img src="./src/assets/Frames.jpg" className="card-img-top" alt="..." style={{width:"auto", height:"242px", objectFit:"cover"}}/>
            <div className="card-body">
                <h2 className="card-text" style={{textAlign:"center"}}>
                    Illustrated Frames
                </h2>
            </div>
        </div>

        <div className="card" style={{ marginTop:"20px", marginLeft:"20px", marginRight:"20px", width: '18rem', borderColor:"#FFB6C1", borderWidth:"4px" }}>
            <img className="card-img-top" src="./src/assets/Photo_Album.jpg" alt="Card image cap" style={{width:"auto", height:"242px", objectFit:"cover"}} />
            <div className="card-body">
                <h2 className="card-title" style={{textAlign:"center"}}>Photo Book</h2>
                <a href="#" className="btn btn-primary">More...</a>
            </div>
        </div>
        </div>


        
        <div className="container my-5" style={{maxWidth:"100%", width:"100%"}}>
            <footer style={{ backgroundColor: '#FFB6C1' }}>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 mb-4">
                            <tr>
                              <img src="./src/assets/Instagiftify Logo.png" alt="" style={{width:"auto", height:"150px"}}/>
                            <p style={{fontSize:"20px", fontStyle:"italic"}}>
                              Thanks for ordering through Instagiftify! See you soon!
                            </p>
                            </tr>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <h5 className="mb-3" style={{color: '#ffffff' }}>Go Back</h5>
                            <ul className="list-unstyled mb-0">
                                <li className="mb-1">
                                    <a href="#!" style={{ color: '#000000' }}>HOME</a>
                                </li>
                                <li className="mb-1">
                                    <a href="#!" style={{ color: '#000000' }}>Products</a>
                                </li>
                                <li className="mb-1">
                                    <a href="#!" style={{ color: '#000000' }}>Steps</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 mb-4">
                            <h5 className="mb-1" style={{color: '#ffffff' }}>Contact</h5>
                            <table className="table" style={{alignItems:"start"}}>
                                <tbody>
                                    <tr>
                                      <a className='Instagram' href='https://www.instagram.com/instagiftify?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
                                    <img src="./src/assets/Instagram.png"alt="" width="auto" height="32"></img>
                                    </a>
                                    <a href='mailto:instagiftify@gmail.com?subject=Inquiry&body=Hello%20there,'>
                                    <img src="./src/assets/gmail.png" alt="" width="auto" height="32"></img>
                                    </a>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="text-center p-3" style={{ backgroundColor:"#E75480", color:"#ffffff"}}>
                   © 2020 Copyright: Created by Instagiftify <img src='./src/assets/heart.png' style={{height:"auto", width:"24px" }}></img>
                </div>
            </footer>
        </div>
    </>
  )
}

export default App
