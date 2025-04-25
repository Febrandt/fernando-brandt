function InitialHero() {
    return <>
        <div className='flex flex-row items-center sm:h-[80vh] lg:h-[80vh] md:h-[80vh] h-[75vh] px-16 flex-wrap-reverse align-middle'>
            <div className='flex-2/3 sm:mt-0 -mt-40'>
                <h1 className='sm:text-7xl text-[12vw]/[12vw] line mb-2'>Fernando Brandt</h1>
                <em className='text-2xl tracking-[0.09rem]'>Programador de Sistemas e Websites</em>
            </div>
            <div className='flex justify-center flex-1/3' >
                <img src='/assets/profile.webp' className='w-[40vw] sm:w-[15rem] rounded-full'></img>
            </div>
        </div>
    </>
}

export default InitialHero