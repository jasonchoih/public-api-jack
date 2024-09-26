import { stat } from '@/utils/data'
//  
import Page from '@/components/home/page'
// 
export async function generateStaticParams()
{
  return stat || [{category:'home'}]
}
// 
export default () =>
{
    return <Page />
}