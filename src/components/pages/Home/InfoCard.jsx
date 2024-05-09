/* eslint-disable react/prop-types */
import { Card } from 'keep-react'
const InfoCard = ({ CardIcon, DataEndPoint, Title, Colors, }) => {
    return (
        <Card className="max-w-md rounded-lg">
            <Card.Content className='flex justify-between items-center'>
                <div className='w-[30%]'>
                    <div className={`bg-[${Colors.bg}] w-[40px] h-[40px] flex items-center justify-center rounded-full`}>
                        <CardIcon size={24} color={Colors.primary} />
                    </div>
                </div>
                <div className='w-[70%]'>
                    <Card.Title className='text-xl text-bold'>
                        {Title}
                    </Card.Title>
                    <Card.Description className='text-sm'>
                        {DataEndPoint}
                    </Card.Description>
                </div>
            </Card.Content>
        </Card>
    );
};

export default InfoCard;