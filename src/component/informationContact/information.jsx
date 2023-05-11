import { Link, useParams } from "react-router-dom";
import './information.scss';

export let Information = () => {
  let { id } = useParams();
  return (
    <>
      <div className="informationContact">
        <div className="img">jkasadsj</div>
        <div className="content">
          <div className="nameDiv">
            <h1>Husniddin id:{id}</h1>
            <input type="checkbox" />
          </div>
          <h3>Nomozboyev</h3>
          <h4>absd</h4>
          <div className="btnDiv">
            <Link>Edit</Link>
            <Link>Delet</Link>
          </div>
        </div>
      </div>
    </>
  );
};
