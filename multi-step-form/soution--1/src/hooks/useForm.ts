import { useContext } from "react";
import FormContext from "../contexts/FormContext";

export default function useForm() {
    return useContext(FormContext);
}