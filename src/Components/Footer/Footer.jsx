function Footer(){
    return(
        <>
        <div className="bg-gray-900 flex justify-between items-center p-1">
            <img src="/logo.png" alt="logo" className="h-10 w-25"/>
            <p className="text-white">© {new Date().getFullYear()}, Amazon Clone. All rights reserved.</p>
        </div>
        </>
    );
}
export default Footer