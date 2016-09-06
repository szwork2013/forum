import React from 'react';
import Formsy from 'formsy-react';
import { FormsySelect,FormsyText } from 'formsy-material-ui/lib';
import { RaisedButton,Paper,Snackbar,SelectField,TextField,DropDownMenu,MenuItem } from 'material-ui';

export default class PubPosts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            snackbarOpen:false,
            snackbarMsg:""
        }

        this.handlePostsSubmit = this.handlePostsSubmit.bind(this);
    }
    componentDidMount(){}

    handlePostsSubmit(data,resetForm){
        this.props.addPosts(data,function(){
            resetForm();
            this.setState({snackbarOpen:true,snackbarMsg:"发表帖子成功!"});
        }.bind(this),function(err){
            this.setState({snackbarOpen:true, snackbarMsg:"发表帖子失败,请稍后重试"});
        }.bind(this));
    }

    render() {
        const { snackbarOpen,snackbarMsg } = this.state;
        const { categoryList } = this.props;
        return (
            <Paper className="pubPosts_page">
                <div className="header">
                    发表话题
                </div>
                <Formsy.Form className="form" onValidSubmit={this.handlePostsSubmit}>
                    <div className="">
                        <FormsySelect
                            name="categoryId"
                            floatingLabelText="分类"
                            hintText="输入框支持markdown语法."
                            required
                        >
                            {categoryList.map((item)=>
                                <MenuItem key={item._id} value={item._id} primaryText={item.name} />
                            )}
                        </FormsySelect>
                    </div>
                    <div className="text_">
                        <FormsyText
                            name="title"
                            floatingLabelText="标题"
                            hintText="请输入"
                            validations="minLength:5"
                            validationError="至少输入5个字"
                            required
                            fullWidth={true}
                        />
                        <FormsyText
                            name="content"
                            floatingLabelText="内容"
                            hintText="输入框支持markdown语法."
                            validations="minLength:10"
                            validationError="至少输入10个字"
                            required
                            multiLine={true}
                            rows={5}
                            fullWidth={true}
                        />
                    </div>
                    <p></p>
                    <div>
                        <RaisedButton
                            primary={true}
                            type="submit"
                            label="提交"
                        />
                    </div>
                </Formsy.Form>
                <Snackbar
                    open={snackbarOpen}
                    message={snackbarMsg}
                    autoHideDuration={3000}
                />
            </Paper>
        );
    }
}