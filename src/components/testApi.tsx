





type dataProps = {
    name: string
}

export default function Read ({localData}:dataProps) {
    const fetchData = async () => {
        const response = await fetch("/api/storeJsonData")
        const data = await response.json();
        console.log(data)
    }
}