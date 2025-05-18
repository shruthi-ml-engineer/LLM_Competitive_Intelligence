from langchain.vectorstores import FAISS
from langchain.embeddings import OpenAIEmbeddings
from langchain.chat_models import ChatOpenAI
from langchain.chains.qa_with_sources import load_qa_with_sources_chain
import os
from dotenv import load_dotenv

load_dotenv()

embedding = OpenAIEmbeddings()
db = FAISS.load_local("embeddings/faiss_index", embedding)

llm = ChatOpenAI(temperature=0)
qa_chain = load_qa_with_sources_chain(llm, chain_type="stuff")

def query_docs(query, k=5):
    docs = db.similarity_search(query, k=k)
    response = qa_chain({"input_documents": docs, "question": query}, return_only_outputs=True)
    return response

