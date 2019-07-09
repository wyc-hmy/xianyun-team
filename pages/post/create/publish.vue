<template>
  <div data-v-a7cc81fa="" class="container">
        <div data-v-a7cc81fa="" class="el-row is-justify-space-between el-row--flex">
            <div data-v-a7cc81fa="" class="main">
                <!-- 标题 -->
                <h2 data-v-a7cc81fa="">发表新攻略</h2>
                <p data-v-a7cc81fa="" class="create-desc">
                    分享你的个人游记，让更多人看到哦！
                </p>
                <form data-v-a7cc81fa="" ref="form" :model="form"  class="el-form">
                    <div data-v-a7cc81fa="" class="el-form-item">
                        <!--文本栏标题-->
                        <div class="el-form-item__content">
                            <div data-v-a7cc81fa="" class="el-input">
                                <!--输入标题--><input type="text" autocomplete="off" v-model="form.title"  placeholder="请输入标题"
                                    class="el-input__inner">
                                <!---->
                                <!---->
                                <!---->
                            </div>
                            <!---->
                        </div>
                    </div>
                    <div data-v-a7cc81fa="" class="el-form-item">
                        <!--富文本-->
                        <div class="el-form-item__content">
                            <div data-v-51726ab4="" data-v-a7cc81fa="" id="vue-editor-wrapper">
                                <div data-v-51726ab4="" id="editor" class="ql-container ql-snow">
                                    <div class="ql-editor ql-blank" data-gramm="false" contenteditable="true" >
                                        <p><br></p>
                                    </div>
                                </div> <button data-v-51726ab4="" class="vue-editor-image-tip ql-snow"
                                    style="display: block; left: 207px; top: 18px;">
                                    <svg data-v-51726ab4=""
                                        viewBox="0 0 18 18">
                                        <rect data-v-51726ab4="" height="10" width="12" x="3" y="4" class="ql-stroke">
                                        </rect>
                                        <circle data-v-51726ab4="" cx="6" cy="7" r="1" class="ql-fill"></circle>
                                        <polyline data-v-51726ab4="" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"
                                            class="ql-even ql-fill"></polyline>
                                    </svg> <input data-v-51726ab4="" type="file"></button> <button data-v-51726ab4=""
                                    class="vue-editor-video-tip ql-snow"
                                    style="display: block; left: 235px; top: 18px;"><svg data-v-51726ab4=""
                                        viewBox="0 0 18 18">
                                        <rect data-v-51726ab4="" height="12" width="12" x="3" y="3" class="ql-stroke">
                                        </rect>
                                        <rect data-v-51726ab4="" height="12" width="1" x="5" y="3" class="ql-fill">
                                        </rect>
                                        <rect data-v-51726ab4="" height="12" width="1" x="12" y="3" class="ql-fill">
                                        </rect>
                                        <rect data-v-51726ab4="" height="2" width="8" x="5" y="8" class="ql-fill">
                                        </rect>
                                        <rect data-v-51726ab4="" height="1" width="3" x="3" y="5" class="ql-fill">
                                        </rect>
                                        <rect data-v-51726ab4="" height="1" width="3" x="3" y="7" class="ql-fill">
                                        </rect>
                                        <rect data-v-51726ab4="" height="1" width="3" x="3" y="10" class="ql-fill">
                                        </rect>
                                        <rect data-v-51726ab4="" height="1" width="3" x="3" y="12" class="ql-fill">
                                        </rect>
                                        <rect data-v-51726ab4="" height="1" width="3" x="12" y="5" class="ql-fill">
                                        </rect>
                                        <rect data-v-51726ab4="" height="1" width="3" x="12" y="7" class="ql-fill">
                                        </rect>
                                        <rect data-v-51726ab4="" height="1" width="3" x="12" y="10" class="ql-fill">
                                        </rect>
                                        <rect data-v-51726ab4="" height="1" width="3" x="12" y="12" class="ql-fill">
                                        </rect>
                                    </svg> <input data-v-51726ab4="" type="file"></button>
                            </div>
                            <!---->
                        </div>
                    </div>
                    <div data-v-a7cc81fa="" class="el-form-item">
                        <!--搜索栏-->
                        <div class="el-form-item__content">
                            <div data-v-a7cc81fa="" class="el-form-item"><label class="el-form-item__label">选择城市</label>
                                <div class="el-form-item__content">
                                    <div data-v-a7cc81fa="" aria-haspopup="listbox" role="combobox"
                                        aria-owns="el-autocomplete-123" class="el-autocomplete el-autocomplete">
                                        <div class="el-input">
                                            <!----><input type="text" autocomplete="off" valuekey="value"
                                                placeholder="请搜索游玩城市"  v-model="form.city" fetchsuggestions="function () { [native code] }"
                                                triggeronfocus="true" debounce="300" placement="bottom-start"
                                                popperappendtobody="true" class="el-input__inner" role="textbox"
                                                aria-autocomplete="list" aria-controls="id"
                                                aria-activedescendant="el-autocomplete-123-item--1">
                                            <!---->
                                            <!---->
                                            <!---->
                                        </div>
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <!---->
                        </div>
                    </div>
                </form>
                <div data-v-a7cc81fa="" class="create-button"><button data-v-a7cc81fa="" @click="submit" type="button"
                        class="el-button el-button--primary el-button--small">
                        <!--发布栏-->
                        <!----><span>发布</span></button> <span data-v-a7cc81fa="" class="submit-side">
                        或者 <a data-v-a7cc81fa="" href="javascript:;">保存到草稿</a></span></div>
            </div>
            <div data-v-a7cc81fa="" class="aside">
                <div data-v-a7cc81fa="" class="draft-box">
                    <h4 data-v-a7cc81fa="" class="draft-title">草稿箱（0）</h4>
                    <div data-v-a7cc81fa="" class="draft-list"></div>
                </div>
            </div>
        </div>
    
    <!-- 富文本 -->
    <VueEditor :config="config" ref="vueEditor" />
  </div>
</template>

<script>
import "quill/dist/quill.snow.css"
let VueEditor;

if (process.browser) {
    VueEditor = require('vue-word-editor').default
}

export default {
  name: "app",
  data() {
     
    return {
            form:{
                content:'',
                  city:'',
                  title:'',           
              }, 
      config: {
        modules: {
          // 工具栏
          toolbar: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"],
            ["image", "video"],

            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }], // superscript/subscript
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            [{ direction: "rtl" }] // text direction
          ]
        },
        // 主题
        theme: "snow",
        uploadImage: {
          url: "http://localhost:1337/upload",
          name: "files",
          uploadBefore(file) {
            return true;
          },
          uploadProgress(res) {},
          uploadSuccess(res, insert) {
            insert("http://localhost:1337" + res.data[0].url);
          },
          uploadError() {},
          showProgress: false
        },

        uploadVideo: {
          url: "http://localhost:1337/upload",
          name: "files",
          uploadBefore(file) {
            return true;
          },
          uploadProgress(res) {},
          uploadSuccess(res, insert) {
            insert("http://localhost:1337" + res.data[0].url);
          },
          uploadError() {}
        }
      }
    };
  },

  components: {
    VueEditor
  },
    
};
</script>


<style scoped lang="less">
* {
    margin: 0;
    padding: 0;
};
a {
    text-decoration: none;
    color: inherit;
};
.container[data-v-a7cc81fa] {
    width: 1000px;
    margin: 0 auto;
    padding: 20px 0;
    .main[data-v-a7cc81fa] {
    width: 750px;
};
h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
};
p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
};
.el-form-item {
    margin-bottom: 22px;
};
.el-form-item:after, .el-form-item:before {
    display: table;
    content: "";
};
.el-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
};
.el-form-item__content:after, .el-form-item__content:before {
    display: table;
    content: "";
};
.el-input {
    position: relative;
    font-size: 14px;
    display: inline-block;
    width: 100%;
};
.el-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
};
.el-form-item__content:after {
    clear: both;
};
.el-form-item__content:after, .el-form-item__content:before {
    display: table;
    content: "";
};
.el-form-item {
    margin-bottom: 22px;
};

.main[data-v-a7cc81fa] #editor {
    height: 400px;
};
.ql-toolbar.ql-snow+.ql-container.ql-snow {
    border-top: 0;
};
.ql-container.ql-snow {
    border: 1px solid #ccc;
};
.ql-snow, .ql-snow * {
    box-sizing: border-box;
};
.ql-container {
    box-sizing: border-box;
    font-family: Helvetica,Arial,sans-serif;
    font-size: 13px;
    height: 100%;
    margin: 0;
    position: relative;
};
.ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    -o-tab-size: 4;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
};
.ql-clipboard {
    left: -100000px;
    height: 1px;
    overflow-y: hidden;
    position: absolute;
    top: 50%;
};
.vue-editor-image-tip[data-v-51726ab4], .vue-editor-video-tip[data-v-51726ab4] {
    position: absolute;
    display: none;
    overflow: hidden;
    height: 24px;
    padding: 3px 5px;
    width: 28px;
    background: none;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
};
.vue-editor-image-tip[data-v-51726ab4], .vue-editor-video-tip[data-v-51726ab4] {
    position: absolute;
    display: none;
    overflow: hidden;
    height: 24px;
    padding: 3px 5px;
    width: 28px;
    background: none;
    border: none;
    cursor: pointer;
    box-sizing: border-box;
};
.el-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
};
.el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
};
.el-button--small, .el-button--small.is-round {
    padding: 9px 15px;
};
.el-button--mini, .el-button--small {
    font-size: 12px;
    border-radius: 3px;
};
.el-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
};
.main .submit-side[data-v-a7cc81fa] {
    margin-left: 10px;
    font-size: 14px;
};
.main .submit-side a[data-v-a7cc81fa] {
    color: orange;
};
.aside[data-v-a7cc81fa] {
    width: 200px;
};
.aside .draft-box[data-v-a7cc81fa] {
    border: 1px solid #ddd;
    padding: 10px;
};
.aside .draft-box .draft-title[data-v-a7cc81fa] {
    margin-bottom: 10px;
    font-weight: 400;
    color: #666;
};
h4 {
    display: block;
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
};

};


</style>
