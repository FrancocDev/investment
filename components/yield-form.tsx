"use client"
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useInvestment } from '@/lib/context'

type Props = {}

function YieldForm({}: Props) {
    const {investment, setInvestment} = useInvestment()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const inputElement = (event.target as HTMLFormElement).elements[0] as HTMLInputElement;
        const investment = Number(inputElement.value);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        setInvestment(investment);
    }

    return (
        <form className="flex flex-row gap-4 w-full" onSubmit={handleSubmit}>
            <Input/>
            <Button>Calcular</Button>
        </form>
    )
}

export default YieldForm