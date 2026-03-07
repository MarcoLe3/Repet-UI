import CopyButton from '@/components/Button/CopyButton';
import Image from 'next/image';

export default function MainHeroCard() {
    return(
        <main className="flex flex-col gap-8 relative justify-center items-center text-foreground bg-background-second text-light h-[80vh] w-screen">
            <h1 className="text-6xl font-semibold">Open Source UI Library.</h1>
            <div className='text-lg text-custom-blue flex gap-2 border-1 border-custom-gray bg-background-second items-center px-4 py-2 rounded-xl hover:border-custom-blue'>
                <p >npm install repet-ui</p>
                <CopyButton textToCopy="npm install repet-ui" />
            </div>
            <Image
                src="/Cone.svg"
                alt="Cone"
                className='absolute top-80 left-40'
                width={200}
                height={200}
            />
            <Image
                src="/Tree.svg"
                alt="Tree"
                className='absolute top-65 right-10'
                width={250}
                height={250}
            />
        </main>
    )
}