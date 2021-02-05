var documenterSearchIndex = {"docs":
[{"location":"massdataset/#MASS-dataset","page":"Mass dataset","title":"MASS dataset","text":"","category":"section"},{"location":"massdataset/","page":"Mass dataset","title":"Mass dataset","text":"The data's project is located here","category":"page"},{"location":"massdataset/#Installing-the-corpus","page":"Mass dataset","title":"Installing the corpus","text":"","category":"section"},{"location":"massdataset/","page":"Mass dataset","title":"Mass dataset","text":"The data should be downloaded here.","category":"page"},{"location":"massdataset/","page":"Mass dataset","title":"Mass dataset","text":"Make sure to download the correct data:","category":"page"},{"location":"massdataset/","page":"Mass dataset","title":"Mass dataset","text":"Language Language Name Version Archive Name\nBasque Euskara Non Drama New Testament EUSEABN1DA.zip\nEnglish English Standard Version Non Drama New Testament ENGESVN1DA.zip\nFinnish Finnish 1938 New Testament Non Drama FIN38VN1DA.zip\nFrench French 1910 Louis Segond New Testament FRNTLSN2DA.zip\nRomanian Romanian Dumitru Cornilescu Non Drama New Testament RONDCVN1DA.zip\nRussian Russian 1876 Synodal Bible Drama New Testament RUSS76N2DA.zip","category":"page"},{"location":"massdataset/","page":"Mass dataset","title":"Mass dataset","text":"Then, un-zip the archive and run:","category":"page"},{"location":"massdataset/","page":"Mass dataset","title":"Mass dataset","text":"using SpeechDatasets\n\nMASSDATASET.prepare(\"data/massdataset\", \"audiodir\", \"lang\")","category":"page"},{"location":"massdataset/","page":"Mass dataset","title":"Mass dataset","text":"where audiodir is the directory contiaining the MP3 files, \"lang\" is the name of the language of the data without capital (french, basque, russian, ...).","category":"page"},{"location":"massdataset/#Citation","page":"Mass dataset","title":"Citation","text":"","category":"section"},{"location":"massdataset/","page":"Mass dataset","title":"Mass dataset","text":"@inproceedings{boito2020mass,\n    title={MaSS: A Large and Clean Multilingual Corpus of Sentence-aligned Spoken Utterances Extracted from the Bible},\n    author={Marcely Zanon Boito and William N. Havard and Mahault Garnerin and Éric Le Ferrand and Laurent Besacier},\n    booktitle = {Language Resources and Evaluation Conference (LREC) 2020},\n   year={2020},\n }","category":"page"},{"location":"#SpeechDatasets","page":"Home","title":"SpeechDatasets","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"SpeechDaatasets is a Julia package to prepare speech corpora for training speech machine learning system. This package particularly focuses on low-resource language.","category":"page"},{"location":"","page":"Home","title":"Home","text":"See the project on github","category":"page"},{"location":"#Authors","page":"Home","title":"Authors","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Lucas Ondel, Brno University of Technology","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The package can be installed with the Julia package manager. From the Julia REPL, type ] to enter the Pkg REPL mode and run:","category":"page"},{"location":"","page":"Home","title":"Home","text":"pkg> add SpeechDatasets","category":"page"},{"location":"","page":"Home","title":"Home","text":"or to install the latest version from the github repository:","category":"page"},{"location":"","page":"Home","title":"Home","text":"pkg> add https://github.com/lucasondel/SpeechDatasets","category":"page"},{"location":"#Manual-outline","page":"Home","title":"Manual outline","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"depth = 1\nPages = [\"mboshi.md\", \"massdataset.md\"]","category":"page"},{"location":"mboshi/#Mboshi-corpus","page":"Mboshi","title":"Mboshi corpus","text":"","category":"section"},{"location":"mboshi/","page":"Mboshi","title":"Mboshi","text":"The original corpus is located here. Note that you don't need to download it, the preparation script will do it for you.","category":"page"},{"location":"mboshi/#Installing-the-corpus","page":"Mboshi","title":"Installing the corpus","text":"","category":"section"},{"location":"mboshi/","page":"Mboshi","title":"Mboshi","text":"using SpeechDatasets\n\nMBOSHI.prepare(\"data/mboshi\")","category":"page"},{"location":"mboshi/#Citation","page":"Mboshi","title":"Citation","text":"","category":"section"},{"location":"mboshi/","page":"Mboshi","title":"Mboshi","text":"@article{DBLP:journals/corr/abs-1710-03501,\n  author    = {Pierre Godard and\n               Gilles Adda and\n               Martine Adda{-}Decker and\n               Juan Benjumea and\n               Laurent Besacier and\n               Jamison Cooper{-}Leavitt and\n               Guy{-}No{\\\"{e}}l Kouarata and\n               Lori Lamel and\n               H{\\'{e}}l{\\`{e}}ne Maynard and\n               Markus M{\\\"{u}}ller and\n               Annie Rialland and\n               Sebastian St{\\\"{u}}ker and\n               Fran{\\c{c}}ois Yvon and\n               Marcely Zanon Boito},\n  title     = {A Very Low Resource Language Speech Corpus for Computational Language\n               Documentation Experiments},\n  journal   = {CoRR},\n  volume    = {abs/1710.03501},\n  year      = {2017},\n  url       = {http://arxiv.org/abs/1710.03501},\n  archivePrefix = {arXiv},\n  eprint    = {1710.03501},\n  timestamp = {Tue, 16 Jan 2018 11:17:17 +0100},\n  biburl    = {https://dblp.org/rec/bib/journals/corr/abs-1710-03501},\n  bibsource = {dblp computer science bibliography, https://dblp.org}\n}","category":"page"}]
}
