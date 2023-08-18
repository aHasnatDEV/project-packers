import React from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumb from '../Hooks/useBreadcrumb';

const Breadcrumb = () => {
    const breadcrumbs = useBreadcrumb();
    
    return (
        <nav className='bg-primary'>
            <ul className='max-w py-3 flex items-center gap-1 text-gray-400'>
                <li className="breadcrumb-item">
                    <Link to="/" className=''>Home</Link>
                </li>
                {breadcrumbs.map((breadcrumb, index) => (
                    <li
                        key={index}
                        className='first-letter:uppercase'
                    >
                        <Link
                            to={breadcrumb.url}
                            className={index < breadcrumbs.length - 1 ? 'text-gray-400' : 'text-white'}
                        >
                            / {breadcrumb.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Breadcrumb;
