interface SilverListItemProps {
    item: {
        name: string;
    };
}

const SilverListItem: React.FC<SilverListItemProps> = ({ item }) => {
    return(<>
        <h1>{item.name}</h1>
    </>)
}

export default SilverListItem