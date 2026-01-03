type Props = {
    label : string,
    value : string
}

export function InfoRow({ label, value } : Props) {
    return(
        <div className="flex justify-between gap-4">
            <span className="text-gray-500">{label}</span>
            <span className="font-medium text-gray-900">{value}</span>
        </div>
    )
}