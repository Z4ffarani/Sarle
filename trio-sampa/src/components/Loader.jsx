import { lineSpinner } from 'ldrs'
lineSpinner.register()

export default function Loader() {
    return (
        <l-line-spinner className='fixed'
            size="60"
            stroke="3"
            speed="1" 
            color="red" 
        />
    )
}