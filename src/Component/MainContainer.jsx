import React from 'react';

function MainContainer({ children }) {
    return (
        <div className="max-w-[1440px] h-[100vh] w-full">
            {children}
        </div>
    );
}

export default MainContainer;
