import { useEffect } from "react";
import * as React from "react";
import useAddMarker from "../../hooks/useAddMarker";

interface Props {
    isActivated: boolean;
}

const AddPlaceFragment: React.FC<Props> = (props: Props) => {
    const { setActivate } = useAddMarker(props.isActivated);

    useEffect(()=> {
        setActivate(props.isActivated);
    }, [props.isActivated])

    return (
        <React.Fragment>
            {/* intentionally left blank */}
        </React.Fragment>);
}

export default AddPlaceFragment;
