import React from "react";
import { Link } from "react-router-dom";
// import { createReact, createRoot } from 'react-dom/client';

function Home() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Home Component</div>
                        <div className="card-body">I'm an home Component!</div>
                        <Link to={'/page'} className="btn btn-primary">Pageへ遷移</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;