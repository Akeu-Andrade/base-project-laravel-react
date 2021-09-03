import React from 'react';

export default function ({event}){
    return (
        <div className="post-info">
            <p>Teste {event}</p>
            <button type="button" className="btn btn-primary">Left</button>
        </div>
    );
}
