import { IoMdArrowRoundBack } from "react-icons/io";
import "./../styles/components/arrowback.sass"
import { useNavigate } from "react-router-dom";

const arrow = [
    { id: "arrowback", icon: <IoMdArrowRoundBack /> },
]

const ArrowBack = () => {

    const navigate = useNavigate();

    const goToBack = () => {
        navigate("/");
    }
    return (
        <section id="arrow-back">
            <div>
                {arrow.map((arrows) => (
                    <div className="arrowsback" id={arrows.id} key={arrows.id}>
                        <button
                            type="button"
                            className="btn"
                            onClick={goToBack}>
                            {arrows.icon}
                        </button>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default ArrowBack;
