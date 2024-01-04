/* eslint-disable @typescript-eslint/prefer-as-const */
/* eslint-disable dot-notation */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
'use client'
// import { useState } from 'react'
import { useEffect, useState, ChangeEvent, FC, useContext } from 'react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Eye, EyeSlash } from 'phosphor-react'
import * as Yup from 'yup'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'react-quill/dist/quill.snow.css' // import styles
import 'react-datepicker/dist/react-datepicker.css'
import { getWorkspace } from '@/utils/api'
import nookies, { parseCookies, setCookie } from 'nookies'
import Sidebar from '../Sidebar'
import ChatSidebar from './ChatSidebar'
import { getUserChannels } from '@/utils/api-chat'
import Start from './Start'

const Chat = (id: any) => {
  const { push } = useRouter()

  //   useEffect(() => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'smooth',
  //     })
  //     if (id) {
  //       getData()
  //     } else {
  //       push('/dashboard')
  //     }
  //   }, [id])
  return (
    <>
      <div className="flex">
        <div className="flex-shrink-0 ">
          <Sidebar id={id.id} />
        </div>
        <div className="flex-shrink-0 ">
          <ChatSidebar id={id.id} />
        </div>
        <Start />
      </div>
    </>
  )
}

export default Chat
