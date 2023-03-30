import CardPlans from "../CardPlans/CardPlans"
import SelectedPlan from "../SelectedPlan/SelectedPlan"
import Texts from "../Texts/Texts"
import Title from "../Title/Title"

const Plans = () => {
    return (
        <div>
        <Title text={'Find a plan thats right for you'}/>
        <Texts tex={'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.'}/>
        <CardPlans plantitle='Starter' money='49' plantext='For teams building apps for many public & private users.'/>
        <SelectedPlan plantitle='Bussines' money='79' plantext='For teams building apps for many public & private users.'/>
        <CardPlans plantitle='Enterprise' money='129' plantext='For teams building apps for many public & private users.'/>
        </div>
    )
}

export default Plans