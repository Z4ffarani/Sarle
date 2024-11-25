import { waveform } from 'ldrs'
waveform.register()

export default function Loader() {
    return (
        <l-waveform className='fixed'
            size="60"
            stroke="5"
            speed="1" 
            color="#952114"
        />
    )
}