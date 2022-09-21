import { React, useState } from 'react';
import './MainButton.css'
import SS2 from '../SS2/SS2';
import SS3 from '../SS3/SS3';


export default function MainButton(btnSelect, setbtnSelect) {
    const [visibleItem, setVisibleItem] = useState('');
    return (
        <section>
            <div>
                <div className='btnGroup'>
                    <a href='#' onClick={() => setVisibleItem('SS2')}>Season 2 Questions</a>
                    <a href='#' onClick={() => setVisibleItem('SS3')}>Season 3 Questions</a>
                    <a href='#'>Season 4 Questions</a>
                    <a href='#'>Season 5 Questions</a>
                </div>
                <div className='container'>
                    {visibleItem === 'SS2' &&
                        <SS2 />
                    }

                    {visibleItem === 'SS3' &&
                        <SS3 />
                    }
                </div>



            </div>

        </section>





    )
}



