import Button from './Button'
const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className = "Header">
            <h1>{title}</h1>
            <Button 
                color={showAdd ? 'red' : 'green'} 
                text={showAdd ? 'Close' : 'Add'} 
                onClick = {onAdd}
            ></Button>
        </header>
    );
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header;