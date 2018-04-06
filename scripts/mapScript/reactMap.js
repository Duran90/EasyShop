const map = document.getElementById("root");

class Map extends React.Component {
    map = () => {
        return (
            <div id="map" className="col-xs-8 col-md-9"/>

        )
    };
    render = () => {
        return (
            this.map());



    }
}

ReactDOM.render(<Map/>, map);