import React, {Component} from 'react';

class Post extends Component {
    constructor(){
        super()
        this.state={
            like : 0,
            unlike :0
        }
    this.handleClicklike = this.handleClicklike.bind(this);
    this.handleClickunlike = this.handleClickunlike.bind(this);
    }
    handleClicklike(){
        this.setState(prevstate => ({
            like : prevstate.like + 1
        }))
    }
    handleClickunlike(){
        this.setState({
        unlike : this.state.unlike + 1
        })
    }
    render(){
        return(
            <div style={{width:'80%', margin: '0 auto', border:'1px solid #eee'}}>
                <h1> heading </h1>
            
                    <div style={{display:'flex', height:'30px', width:'100%',background:'#000', color:'#fff', lineHeight:'30px'}}> 
                        <span style={{ flex:'1',color:'#fff'}}>
                            Post name
                        </span>
                        <span style={{ flex:'1',width:'70%'}}>
                            <span>Date:07, jan 2019 </span>
                            <span style={{marginLeft:'20px'}}>Aurthor: Anynomous </span>
                        </span>
                        
                    </div>
                            <main>
                                                            <p style={{ textAlign:'left'}}>
                                                            <tab/>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                            <br/>
                                            <strong>Why do we use it?</strong>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                                            Where does it come from?
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                                            </p>

                            </main>
                <div style={{display:'flex',width:'70%', justifyContent:"flex-start", margin:"20px"}}>
                    <span style={{border:'1px solid #000',width:'100px', padding:'7px'}}>Comments</span>
                    <button style={{border:'1px solid #000',width:'100px', padding:'7px'}} onClick={this.handleClicklike}>Like {this.state.like}</button>
                    <span style={{border:'1px solid #000', width:'100px',padding:'7px'}}>Share</span>
                    <button style={{border:'1px solid #000',width:'100px', padding:'7px'}} onClick={this.handleClickunlike}>UnLike {this.state.unlike}</button>
               
                </div>
                <textarea placeholder="Enter comments here" style={{display:'flex',width:'70%',resize:"none", outline:'none',border:'1px solid #000', justifyContent:"flex-start",height:"45px", margin:"20px"}} />
            </div>
        )
    }
}

export default Post