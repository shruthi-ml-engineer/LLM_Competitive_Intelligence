import streamlit as st
from app.retrieval import query_docs

st.set_page_config(page_title="Competitive Intelligence Q&A")
st.title("Competitive Intelligence with LLMs")

query = st.text_input("Ask a competitive question:")

if query:
    with st.spinner("Analyzing..."):
        result = query_docs(query)
        st.markdown("Answer")
        st.write(result['output_text'])
