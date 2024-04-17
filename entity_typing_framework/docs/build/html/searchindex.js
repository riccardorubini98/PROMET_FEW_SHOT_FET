Search.setIndex({docnames:["api","configuration_file","dataset_managers","dataset_readers","dataset_tokenizers","datasets","encoders","entity_typing_networks","index","input_projectors","introduction","module_dictionary","modules_submodules","package_structure","type_encoders","usage"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["api.rst","configuration_file.rst","dataset_managers.rst","dataset_readers.rst","dataset_tokenizers.rst","datasets.rst","encoders.rst","entity_typing_networks.rst","index.rst","input_projectors.rst","introduction.rst","module_dictionary.rst","modules_submodules.rst","package_structure.rst","type_encoders.rst","usage.rst"],objects:{"entity_typing_framework.EntityTypingNetwork_classes.base_network":[[7,0,1,"","BaseEntityTypingNetwork"]],"entity_typing_framework.EntityTypingNetwork_classes.base_network.BaseEntityTypingNetwork":[[7,1,1,"","forward"],[7,1,1,"","load_from_checkpoint"]],"entity_typing_framework.EntityTypingNetwork_classes.input_encoders":[[6,0,1,"","AdapterDistilBERTEncoder"],[6,0,1,"","BERTEncoder"],[6,0,1,"","BaseBERTLikeEncoder"],[6,0,1,"","DistilBERTEncoder"]],"entity_typing_framework.EntityTypingNetwork_classes.input_encoders.BERTEncoder":[[6,1,1,"","aggregate_function"],[6,1,1,"","forward"],[6,1,1,"","get_representation_dim"]],"entity_typing_framework.EntityTypingNetwork_classes.input_encoders.BaseBERTLikeEncoder":[[6,1,1,"","forward"],[6,1,1,"","freeze_encoder"],[6,1,1,"","get_representation_dim"]],"entity_typing_framework.EntityTypingNetwork_classes.input_encoders.DistilBERTEncoder":[[6,1,1,"","aggregate_function"],[6,1,1,"","forward"],[6,1,1,"","get_representation_dim"]],"entity_typing_framework.EntityTypingNetwork_classes.projectors":[[9,0,1,"","Classifier"],[9,0,1,"","Layer"]],"entity_typing_framework.EntityTypingNetwork_classes.projectors.Classifier":[[9,1,1,"","add_parameters"],[9,1,1,"","check_parameters"],[9,1,1,"","forward"]],"entity_typing_framework.EntityTypingNetwork_classes.projectors.Layer":[[9,1,1,"","forward"],[9,1,1,"","instance_activation"]],"entity_typing_framework.EntityTypingNetwork_classes.type_encoders":[[14,0,1,"","OneHotTypeEncoder"]],"entity_typing_framework.EntityTypingNetwork_classes.type_encoders.OneHotTypeEncoder":[[14,1,1,"","forward"]],"entity_typing_framework.dataset_classes.dataset_managers":[[2,0,1,"","DatasetManager"]],"entity_typing_framework.dataset_classes.dataset_managers.DatasetManager":[[2,1,1,"","create_type2id"],[2,1,1,"","get_tokenizer_config_name"],[2,1,1,"","get_type_number"],[2,1,1,"","instance_tokenizer"],[2,1,1,"","load_tokenized_datasets"],[2,1,1,"","load_type2id"],[2,1,1,"","prepare_data"],[2,1,1,"","read_datasets"],[2,1,1,"","save_tokenized_datasets"],[2,1,1,"","save_type2id"],[2,1,1,"","setup"],[2,1,1,"","test_dataloader"],[2,1,1,"","train_dataloader"],[2,1,1,"","val_dataloader"]],"entity_typing_framework.dataset_classes.datasets":[[3,0,1,"","BaseDataset"],[3,0,1,"","DatasetPartition"]],"entity_typing_framework.dataset_classes.datasets.BaseDataset":[[3,1,1,"","read_dataset_partitions"]],"entity_typing_framework.dataset_classes.datasets.DatasetPartition":[[3,1,1,"","acquire_data"],[3,1,1,"","get_elements_number"]],"entity_typing_framework.dataset_classes.datasets_for_dataloader":[[5,0,1,"","ET_Dataset"]],"entity_typing_framework.dataset_classes.datasets_for_dataloader.ET_Dataset":[[5,1,1,"","__getitem__"],[5,1,1,"","__len__"]],"entity_typing_framework.dataset_classes.tokenized_datasets":[[4,0,1,"","BaseBERTTokenizedDataset"]],"entity_typing_framework.dataset_classes.tokenized_datasets.BaseBERTTokenizedDataset":[[4,1,1,"","compute_max_length"],[4,1,1,"","create_sentence"],[4,1,1,"","cut_context"],[4,1,1,"","extract_sentences_from_dataset"],[4,1,1,"","make_light"],[4,1,1,"","split_and_cut_mention"],[4,1,1,"","tokenize"],[4,1,1,"","tokenize_types"],[4,1,1,"","types2onehot"]]},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"]},objtypes:{"0":"py:class","1":"py:method"},terms:{"0":[7,9,14],"0th":9,"1":[1,7,9,14],"10":4,"128":7,"16":6,"2":7,"32":7,"5":[1,4],"768":[6,12],"80":4,"class":[2,3,4,5,6,7,9,14],"default":[1,6,7,9,10],"function":9,"int":4,"new":7,"return":[2,3,4,5,6,7,10,12,14],"true":[4,6,7,9,14],A:[1,2,10,12],For:1,If:[2,7],In:[6,14],Is:6,It:[1,6,14],The:[1,2,3,4,5,6,7,9,10,12,13],These:[2,7],To:[12,15],__getitem__:[5,6,14],__init__:[2,3,7],__len__:5,abl:[2,7],about:2,abov:10,accept:[4,6],accord:[4,10],acquir:[3,12],acquire_data:3,acquisit:[2,12],activ:9,activation_nam:9,actual:12,adapt:[5,6],adapter_arch:6,adapter_nam:6,adapterdistilbertencod:[6,7],add:[9,10],add_paramet:9,after:9,aggreg:6,aggregate_funct:6,all:[2,3,4,7],alphabet:2,alphanumer:4,alreadi:14,also:[2,7],alwai:[7,12],an:[2,3,5,6,9,10,12],ani:[2,7],api:8,appear:10,ar:[1,2,3,4,6,7,9,10,12],architectur:[6,10],arg:[2,7],argument:7,arrai:5,assum:12,attent:[5,6],attn_mask:5,attribut:[4,5],autoencod:6,automat:[3,4,7,9],automodel:6,automodelr:6,autotoken:[2,4],avail:7,avoid:4,awar:12,base:[5,6,14],base_network:7,basebertlikeencod:6,baseberttokenizeddataset:[2,4],basedataset:[2,3,4],baseentitytypingnetwork:7,basic:7,batch:[5,6,7,9,10,12,14],batch_siz:[6,7,9],batched_attn_mask:6,batched_label:14,batched_tokenized_sent:6,batchencod:4,befor:10,behavior:[2,10],behaviour:7,behind:10,belong:3,bert:[5,6],bertbas:12,bertencod:6,bertlike_model_nam:[2,4,6],between:[2,9],bool:6,build:12,built:10,call:[2,3,4,5],can:[1,6,7,9],cane:1,check:[8,9],check_paramet:9,checkpoint:7,checkpoint_path:7,checkpoint_to_load:7,chosen:2,ckpt:7,cl:6,classic:9,classif:9,classifi:[7,9],clone:15,cls_encod:6,code:[7,10],com:15,common:12,commonli:[2,3,4,6,7,10,12,14],compon:10,compos:[2,4,5],composit:5,comput:[4,6],compute_max_length:4,confid:[9,10],config:[1,2,3],configur:[2,4,6,7,8,9,12,14],connect:9,contain:[2,4,6,14],context:[3,4],convert:7,core:2,correct:[4,6,9,14],correspond:4,cpu:7,creat:[2,4,15],create_sent:4,create_sentences_from_dataset:4,create_type2id:2,createandsav:2,creation:2,cuda:[1,7],cut:4,cut_context:4,d:7,data:[2,3,4,5,6,10,12],dataload:[2,5,7,10,12],dataloader_param:2,datamodul:2,dataset:[1,6,7,8,9,10,12,14],dataset_class:[2,3,4,5],dataset_manag:[1,2],dataset_param:2,dataset_path:[2,3],dataset_read:[2,3,12],dataset_reader_param:2,dataset_token:[2,4,5,12],datasetmanag:[1,2,3,4,5,7,8,9,10,14],datasetpartit:3,datasets_for_dataload:[2,5],declar:7,default_configur:[1,10],defin:[1,2,3,5,6,12,14],definin:3,definit:[1,10],delet:4,depend:4,describ:13,dev:3,dict:[4,7],dictionari:[2,3,4,7,8,9,14],differ:[7,9],dim:6,dimens:[6,9,12],directori:2,dirpath:2,discard:4,distilbert:6,distilbertencod:[6,7],divid:10,document:[2,5,9,12],don:7,drive:[1,2,4,6],driven:9,drop_prob:7,dropout:9,dropout_p:9,dummi:14,dure:2,e:[3,6,12,15],each:[1,2,3,4,5,9,10,12,14],element:[3,5,6,14],enabl:2,encod:[4,5,7,8,9,10,12],encoded_typ:7,encoder_dim:9,encoder_output:6,encoder_param:[4,6,7],enforc:7,ensur:[4,9],entir:[2,3,4],entiti:[3,4,8,9,10,14],entity_typing_framework:[2,3,4,5,6,7,9,10,14,15],entitytypingnetwork:[6,7,9,10,14],entitytypingnetwork_class:[6,7,9,14],equal:[4,6],esim:5,et_adapt:6,et_dataset:[2,5],et_network_param:[6,7,9,14],eval:7,evalu:1,exampl:[1,4,7,9],except:[6,9],expect:[2,3,4,7,8,12,14],extra:7,extract:[4,5,6,9,14],extract_sentences_from_dataset:4,factor:6,fals:[4,6,9,14],featur:9,fed:5,file:[2,3,4,6,7,8,9,10,12,14],first:[4,6,15],fit:1,fix:12,folder:[1,8,10],follow:[1,2,3,4,7,10,12],folow:2,format:[2,4,9,10,12,14],forwar:14,forward:[6,7,9,14],found:3,framework:[2,10],freez:[6,7],freeze_encod:6,from:[2,3,4,5,6,7,9,12,14],fulli:9,further:8,g:[3,6,12],gener:[2,8,10,12],get_elements_numb:3,get_representation_dim:6,get_tokenizer_config_nam:2,get_type_numb:2,git:15,github:[1,10,15],given:[1,9,12],global:1,gpu:[1,7],ha:[1,2,4,6,7,9,10,12,14],have:[5,7,9,10,12],help:12,here:[1,12],hidden:[6,9],hidden_represent:9,hierarch:7,hot:[4,5,14],houlsbi:6,how:[4,8],howev:7,hparam:7,hparams_fil:7,http:15,huggingfac:[2,4,6],hyper_paramet:7,hyperparamet:[1,7],id2typ:2,id:[4,9,12],idea:10,idx:5,implement:[2,3,4,5,6,7,8,9,10,14],in_featur:9,includ:8,increment:9,indent:1,index:[5,8,9],inform:[2,8],init:7,initi:3,input:[6,7,8,10,12],input_dim:9,input_encod:[6,7],input_projector:[7,9],input_projector_param:[7,9],input_represent:9,insert:[6,9,14],insid:[5,12],instal:8,instanc:[2,3,4,5,6,9,14],instance_activ:9,instance_token:[2,4],instanti:[2,4,6,9,12],integ:[4,5,6,12],introduct:[8,13],its:2,json:3,kei:[1,2,3,4,6,7,9,10,12,14],kept:4,keyword:7,kwarg:[2,6,7,14],label:14,label_numb:14,last:[4,9],layer:9,layer_id:9,layers_paramet:9,left:[3,4],left_context_token:[3,4],len:4,light:[2,4],lightn:[7,10],lightningcli:[1,10],lightningdatamodul:[2,10],lightningmodul:7,like:[6,7],limit:4,limit_train_batch:1,line:3,list:[1,2,3,4,5,6,7,9,12,14],list_of_left_context_token:4,list_of_right_context_token:4,load:[2,4,7],load_from_checkpoint:7,load_tokenized_dataset:2,load_type2id:2,logit:[10,12],loss:10,maintain:4,make_light:[2,4],manag:[1,3,4,7,8,9,12,14],mani:4,manner:4,map:7,map_loc:7,mask:[5,6],match:7,max:4,max_epoch:1,max_left_word:4,max_length:4,max_mention_word:4,max_right_word:4,max_token:4,maximum:4,mention:[3,4],mention_span:[3,4],method:[2,3,4,5,6,7,14],modal:2,model:[2,4,6,7,9,12,14],modul:[2,7,8,14],modular:[1,10,13],monolith:10,more:2,most:7,multipl:6,mylightningmodul:7,name:[2,3,4,6,7,9,12,14],namespac:7,need:[1,7,12],network:[1,8,9,14],network_param:[4,6,7],new_path:7,noonebug:15,normal:9,note:4,notic:1,now:7,num_lay:7,num_typ:4,number:[2,3,4,5,6,7,9,12],numpi:[1,5],o:2,object:[1,2,4,7,9],obtain:[2,4,9],offici:[2,5],one:[4,5,6,9,14],one_hot_typ:5,onehottypeencod:[7,14],onli:[2,4,14],oper:9,option:[2,4,6,7],order:5,organ:[1,3,4,5],origin:[2,4,6],other:[4,6,10],out:8,out_featur:9,output:[2,6,7,9],output_dim:6,overrid:[2,5,7],packag:[8,10],paper:6,param:[2,4,6,7,9,14],paramet:[2,3,4,5,6,7,8,9,10,12,14],parametr:[1,9],particular:10,partit:[2,3,10,12],partition_path:3,partitit:2,pass:[4,6,7,9,14],path:[2,3,7],perform:[9,10],pfeiffer:6,pick:[4,6],pickl:2,pip:15,place:12,predict:[7,9],prepar:[5,12],prepare_data:2,pretrained_ckpt_path:7,pretrained_model:7,previous:2,primari:7,print:1,probabl:9,procedur:9,process:6,produc:[10,12],proect:9,proection:9,project:[1,8,9,10,12],projected_input:7,projector:[8,12],py:1,python:1,pytorch:[5,10],pytorch_lightn:[2,7],pytorchlightn:10,rais:[6,9],read:[2,10,12],read_dataset:2,read_dataset_partit:3,reader:[2,4,8,12],readi:5,receiv:[10,12],reduct:6,reduction_factor:6,ref:7,refactor:7,reflect:13,rel:12,relat:10,relu:9,repeatedli:4,report:[1,12],repres:14,represent:[9,12],requir:[4,6],right:[3,4],right_context_token:[3,4],run:[7,9],runtim:1,rw_option:2,s:7,same:[2,7,10],save:[2,3,4,5,7],save_tokenized_dataset:2,save_type2id:2,section:8,see:[1,2,4,5,6,9],seed:1,seed_everyth:1,self:2,sent:4,sent_dict:4,sentenc:[4,5,6,10,12],sep:4,separ:7,set:[1,2,4,6,10],setup:[2,6,7],shape:[4,6,9],shown:1,sigmoid:9,simpl:12,sinc:[7,10,12,14],singl:[4,5],so:5,solut:12,some:[1,7,10,12],space:12,specif:[1,10],specifi:[2,4,6,7,9,14],specifici:9,split:4,split_and_cut_ment:4,start:12,state:7,store:[1,2,3,7,10],str:[4,6],strict:7,strictli:7,string:[3,4,6,9,14],structur:[7,8],subclass:[5,6,10,12],submodul:[2,3,4,5,6,7,8,9,10,14],support:[1,9,10],sure:10,t:7,take:[7,12],taken:3,tensor:[4,5,9,12],test:[2,3,10,12],test_dataload:2,thi:[1,2,3,4,5,6,7,9,10,12,14],think:12,through:[1,5,7,9,10,12],togeth:1,token:[2,5,6,8,10,12,14],token_numb:6,tokenize_typ:4,tokenized_dataset:[2,4,5],tokenized_senc:5,tokenized_sent:5,tokenizer_param:[2,4,6],torch:[1,2,4,5,7,10,12],train:[1,2,3,10,12],train_dataload:2,trainer:8,transformer_s:6,translat:2,treat:7,tupl:5,txt:3,type2id:[2,4,14],type:[2,3,4,5,8,9,10],type_encod:[7,14],type_encoder_param:[7,14],type_numb:[2,7,9],types2onehot:4,types_dict:2,uncas:6,under:[1,2,6,7,9,12],uniform:10,unit:6,url:7,us:[1,2,4,5,6,7,9,10,12,14,15],usag:8,use_batch_norm:9,use_dropout:9,util:[2,5,10,12],val_dataload:2,valid:[2,10,12],valu:[2,3,4,6,7,9,14],vector:[9,14],venv:15,versa:2,version:[2,12],vice:2,w:2,wai:[2,7],we:12,weight:7,when:[4,5,6,7],where:12,whether:7,which:[2,3,9],whole:2,without:[1,7],won:7,word:4,work:9,write:2,x:7,y_hat:7,y_str:3,yaml:[1,2,3,4,6,7,9,12,14],you:[1,7],your:7},titles:["API","Configuration File","Dataset Managers","Dataset Readers","Dataset Tokenizers","Datasets","Encoders","Entity Typing Networks","Welcome to entity_typing_framework\u2019s documentation!","Input Projectors","Introduction","Module Dictionary","Modules and submodules","Package Structure","Type Encoders","Usage"],titleterms:{api:0,configur:[1,10],content:8,dataset:[2,3,4,5],datasetmanag:12,dictionari:11,document:8,encod:[6,14],entiti:[7,12],entity_typing_framework:8,expect:[1,10],file:1,folder:13,gener:1,implement:12,indic:8,input:9,instal:15,introduct:10,manag:2,modul:[1,10,11,12],network:[7,10,12],packag:13,paramet:1,projector:9,reader:3,s:8,structur:13,submodul:12,tabl:8,token:4,trainer:1,type:[7,12,14],usag:15,welcom:8}})