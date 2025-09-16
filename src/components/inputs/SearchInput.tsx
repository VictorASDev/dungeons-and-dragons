interface SearchInputProps {
    type?: string;
    placeholder?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

const SearchInput = (props: SearchInputProps) => {
    return (
        <>
            
        {/*Todo: Adicionar um icone de busca*/}
            <input 
                    type={props.type ?? "text"}
                    placeholder={props.placeholder}
                    className={"p-2 mb-4 border border-gray-300 rounded text-white " + (props.className ?? "")}
                    onChange={props.onChange}
                    value={props.value}
                />
        </>
    );
}

export default SearchInput;