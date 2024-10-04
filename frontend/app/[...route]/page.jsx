'use client';
import CardWrapper from '@/components/CardWrapper'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { host } from '@/lib/host';
import { usePathname } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { f_minPrice, f_maxPrice, f_items } from '../redux/filterSlice';

const IconItems = () => {
    const dispatch = useDispatch();
    const [iconData, setIconData] = useState([])
    const pathName = usePathname()

    const { values } = useSelector(state => state.filter)

    useEffect(() => {
        axios.get(`${host}api/getairbnb`, {
            params: { pathName },
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => {
                setIconData(res.data.others);
                const prices = res.data.others.map(item => item.price);
                dispatch(f_maxPrice(Math.max(...prices)))
                dispatch(f_minPrice(Math.min(...prices)))
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        if (values[1] !== 0) {
            axios.get(`${host}api/getairbnbWithPriceRange`, {
                params: { pathName, minPrice: values[0], maxPrice: values[1] },
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => {
                    dispatch(f_items(res.data.others.length))
                    setIconData(res.data.others)
                })
                .catch(err => console.log(err)
                )
        }
    }, [values]);

    return (
        <div className="px-2 md:px-10 ">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {iconData?.map((item, index) => {
                    return (
                        <div key={index} className="p-2">
                            <CardWrapper
                                FilterData={item}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default IconItems
