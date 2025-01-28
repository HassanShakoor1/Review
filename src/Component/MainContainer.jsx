import React from 'react';

function MainContainer({ children }) {
    return (
        <div className="max-w-[1440px] h-[100vh \] flex  flex-col justify-center  ">
            {children}
        </div>
    );
}

export default MainContainer;
