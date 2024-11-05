import { lineSpinner } from 'ldrs'
lineSpinner.register()

export default function Loader() {
    return (
        <l-line-spinner className='fixed'
            size="70"
            stroke="4"
            speed="1" 
            color="red" 
        />
    )
}