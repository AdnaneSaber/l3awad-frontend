
const Footer = (props:{timeout: bool}) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; L3awad. Designed by <strong>artists</strong> for <strong>artists</strong>.</p>
    </footer>
)

export default Footer
