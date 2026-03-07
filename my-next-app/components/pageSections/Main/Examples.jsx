import LinkButton from '@/components/Button/LinkButton';

export default function Examples() {
    return (
        <section className='w-full h-screen'>
            <h2 className="text-5xl font-bold">Made For You</h2>
            <div className='flex gap-4'>
                <LinkButton
                    href='/Documentation'
                    content='View Documentation'
                    className='bg-background-second border-1 text-lg border-custom-gray text-custom-blue px-4 p-2 rounded-xl w-[250px] h-[150px]'
                />
            </div>
        </section>
    );
}
