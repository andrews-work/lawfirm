import React from 'react';

function Slogan() {
    const h1Style = {
        marginTop: '5vh',
        color: '#2a2fbe', // Use the same blue color
    };

    return (
        <div className="vh-20 d-flex justify-content-center align-items-center">
            <div>
                <h1 className="display-4 blue text-center" style={h1Style}>
                    Highly qualified experts in migration law
                </h1>
                <h2 className="lead text-center">skilled, caring, creative</h2>
            </div>
        </div>
    );
}

export default Slogan;
