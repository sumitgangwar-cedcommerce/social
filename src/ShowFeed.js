import { Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import './css/ShowFeed.css'
import { data } from './Data'
const ShowFeed = () => {
  const feed = useContext(data)

  const f1Like = (e) =>{
    let temp = feed.friend1
    if(e.target.style.color !== 'rgb(24, 119, 242)'){
      temp[e.target.id][3]++
      e.target.style.color = 'rgb(24, 119, 242)'
      feed.setFriend1(temp)
    }
    else{
      temp[e.target.id][3]--
      e.target.style.color = 'black'
      feed.setFriend1(temp)
    } 
  }
  const f2Like = (e) =>{
    let temp = feed.friend2
    if(e.target.style.color !== 'rgb(24, 119, 242)'){
      temp[e.target.id][3]++
      e.target.style.color = 'rgb(24, 119, 242)'
      feed.setFriend2(temp)
    }
    else{
      temp[e.target.id][3]--
      e.target.style.color = 'black'
      feed.setFriend2(temp)
    }   
  }

  const f1Comment = (e) =>{
    let t = e.target.closest('div').parentNode.nextSibling;
    // console.log(t)
    if(t.style.display==='block') t.style.display='none'
    else t.style.display='block'
  }
  const add_commentf1 = (e) =>{
    let ind = e.target.className;
    let txt = e.target.previousSibling.value
    let temp = feed.friend1
    temp[ind][2].push(txt)
    feed.setFriend1(temp)

  }

  const f2Comment = (e) =>{
    let t = e.target.closest('div').parentNode.nextSibling;
    // console.log(t)
    if(t.style.display==='block') t.style.display='none'
    else t.style.display='block'
  }
  const add_commentf2 = (e) =>{
    let ind = e.target.className;
    let txt = e.target.previousSibling.value
    let temp = feed.friend2
    temp[ind][2].push(txt)
    feed.setFriend2(temp)

  }
  const myLike = (e) =>{
    let temp = feed.myFeed
    if(e.target.style.color === 'black'){
      temp[e.target.id][3]++
      temp[e.target.id][4] = 'rgb(24, 119, 242)'
      feed.editMyfeed(temp)
    }
    else{
      temp[e.target.id][3]--
      temp[e.target.id][4] = 'black'
      feed.editMyfeed(temp)
    }   
  }
  const myComment = (e) =>{
    let t = e.target.closest('div').parentNode.nextSibling;
    // console.log(t)
    if(t.style.display==='block') t.style.display='none'
    else t.style.display='block'
  }
  const add_commentmy = (e) =>{
    let ind = e.target.className;
    let txt = e.target.previousSibling.value
    let temp = feed.myFeed
    temp[ind][2].push(txt)
    feed.editMyfeed(temp)

  }
  // console.log("dss"+feed.friend1[0][3])

  const postsf1 = feed.friend1.map((post , index)=>
                                  <div key={index} className='post'>
                                    <div>
                                      <span>F</span> friend 1
                                    </div>
                                    <div>
                                      <p>{post[1]}</p>
                                    </div>
                                    <div>
                                      <img src={'./'+ post[0]} alt="friend"></img>
                                    </div>
                                    <div style={{color:'grey'}}>
                                      {post[3]} Likes  {post[2].length} comments
                                    </div>
                                    <div className='like-comment'>
                                      <div> Like<i id={index} className="fa-solid fa-thumbs-up " onClick={f1Like} ></i></div>
                                      <div>Comment<i onClick={f1Comment} className="fa-solid fa-comment"></i></div>
                                    </div>
                                    <div className='cmnt' style={{display:'none'}}>
                                      <input type="text" placeholder="Write Some Comment"></input><button className={index} onClick={add_commentf1}>Reply</button>
                                      {
                                        post[2].map((data)=> 
                                                            <div className='cmnt-data'>
                                                              <div className='cmnt-1'>You</div>
                                                              <div className='cmnt-2'>{data}</div>
                                                            </div>
                                                          )
                                      }
                                    </div>
                                  </div>
                                )
  const postsf2 = feed.friend2.map((post , index)=>
                                <div key={index} className='post'>
                                  <div>
                                    <span>F</span> friend 2
                                  </div>
                                  <div>
                                    <p>{post[1]}</p>
                                  </div>
                                  <div>
                                    <img src={'./'+ post[0]} alt="friend"></img>
                                  </div>
                                  <div style={{color:'grey'}}>
                                    {post[3]} Likes  {post[2].length} comments
                                  </div>
                                  <div className='like-comment'>
                                    <div>Like<i id={index} className="fa-solid fa-thumbs-up" onClick={f2Like}></i></div>
                                    <div>Comment<i onClick={f2Comment} className="fa-solid fa-comment"></i></div>
                                    </div>
                                    <div className='cmnt' style={{display:'none'}}>
                                      <input type="text" placeholder="Write Some Comment"></input><button className={index} onClick={add_commentf2}>Reply</button>
                                      {
                                        post[2].map((data)=> 
                                                            <div className='cmnt-data'>
                                                              <div className='cmnt-1'>You</div>
                                                              <div className='cmnt-2'>{data}</div>
                                                            </div>
                                                          )
                                      }
                                    
                                  </div>
                                </div>
                              )
  const myFeed = feed.myFeed.map((post , index)=>
                              <div key={index} className='post'>
                                <div>
                                  <span>{feed.login_user[0][0]}</span> {feed.login_user[0]}
                                </div>
                                <div>
                                  <p>{post[1]}</p>
                                </div>
                                <div>
                                  <img src={post[0]} alt=""></img>
                                </div>
                                <div style={{color:'grey'}}>
                                  {post[3]} Likes  {post[2].length} comments
                                </div>
                                <div className='like-comment'>
                                  <div>Like<i style={{color:post[4]}} id={index} className="fa-solid fa-thumbs-up" onClick={myLike}></i></div>
                                  <div>Comment<i onClick={myComment} className="fa-solid fa-comment"></i></div>
                                  </div>
                                  <div className='cmnt' style={{display:'none'}}>
                                    <input type="text" placeholder="Write Some Comment"></input><button className={index} onClick={add_commentmy}>Reply</button>
                                    {
                                      post[2].map((data)=> 
                                                          <div className='cmnt-data'>
                                                            <div className='cmnt-1'>You</div>
                                                            <div className='cmnt-2'>{data}</div>
                                                          </div>
                                                        )
                                    }
                                  
                                </div>
                              </div>
                            )
                                    

                        
  return (
    <div id='feed-page'>
      {
        myFeed.map((post)=> post)
      }
      
      {
        feed.muteFr.indexOf('friend1')===-1 ?  postsf1.map((post)=> post) : null
      }
      {
        feed.muteFr.indexOf('friend2')===-1 ?  postsf2.map((post)=> post) : null
      }
    </div>
  )
}

export default ShowFeed